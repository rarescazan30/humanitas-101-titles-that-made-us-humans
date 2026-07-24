import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';

const titles = JSON.parse(fs.readFileSync('./scripts/sample-titles.json', 'utf8'));

// Helper delay function
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function resolveWorkingUrl(baseSlug) {
  const candidates = [
    `https://humanitas.ro/humanitas/carte/${baseSlug}-2025`,
    `https://humanitas.ro/humanitas/carte/${baseSlug}-2024`,
    `https://humanitas.ro/humanitas/carte/${baseSlug}-2023`,
    `https://humanitas.ro/humanitas/carte/${baseSlug}-2022`,
    `https://humanitas.ro/humanitas/carte/${baseSlug}-2`,
    `https://humanitas.ro/humanitas/carte/${baseSlug}-1`,
    `https://humanitas.ro/humanitas/carte/${baseSlug}`
  ];

  for (const url of candidates) {
    try {
      const res = await axios.get(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        timeout: 2000
      });

      const html = res.data;

      if (typeof html === 'string' && html.includes('<body>404</body>')) {
        await sleep(150); // Tiny pause between checking missing candidates
        continue;
      }

      if (res.status === 200 && (html.includes('prod_image') || html.includes('page-title'))) {
        return url;
      }
    } catch (err) {
      await sleep(150);
    }
  }

  return null;
}

async function scrapeBookDetails(url) {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const $ = cheerio.load(html);
    const metadata = {};

    $('.acordion .row-ac .content ul li').each((_, el) => {
      const text = $(el).text().replace(/\s+/g, ' ').trim();
      if (text.includes(':')) {
        const colonIndex = text.indexOf(':');
        const key = text.substring(0, colonIndex).trim();
        const value = text.substring(colonIndex + 1).trim();

        if (key && value) {
          metadata[key] = value;
        }
      }
    });

    return metadata;
  } catch (error) {
    console.error(`Error fetching details from ${url}:`, error.message);
    return {};
  }
}

async function downloadImage(imageUrl, fileName) {
  if (!imageUrl) return '/covers/default-placeholder.jpg';

  const targetDir = path.join(process.cwd(), 'public', 'covers');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filePath = path.join(targetDir, `${fileName}.jpg`);
  const endId = imageUrl.split('/').pop();
  const newUrl = "https://humanitas.ro/assets/images/products/" + endId;

  try {
    const response = await axios({
      url: newUrl,
      method: 'GET',
      responseType: 'stream',
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(`/covers/${fileName}.jpg`));
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`⚠️ Failed to download image for ${fileName}:`, error.message);
    return '/covers/default-placeholder.jpg';
  }
}

function extractDesc(text) {
  if (!text) return '';
  const cleanText = text.replace(/\s+/g, ' ').trim();
  if (cleanText.length <= 200) return cleanText;
  return cleanText.slice(0, 200).trim() + '...';
}

async function scrapeBook(item) {
  const { title, author, category } = item;
  const searchQuery = author ? `${title} ${author}` : title;
  
  console.log(`\n🔍 Searching for: "${title}" by ${author || 'Unknown'}...`);

  const baseSlug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  let targetUrl = await resolveWorkingUrl(baseSlug);

  if (!targetUrl) {
    console.log(`⚠️ Direct URL check failed. Searching via Humanitas query...`);
    const searchUrl = `https://humanitas.ro/cauta/${encodeURIComponent(searchQuery)}`;

    try {
      const { data: searchHtml } = await axios.get(searchUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const $search = cheerio.load(searchHtml);
      const relativeLink = $search('#search-prods-wrapper .search-prod-entry .book-image a').first().attr('href');

      if (relativeLink) {
        targetUrl = relativeLink.startsWith('http') ? relativeLink : `https://humanitas.ro${relativeLink}`;
      }
    } catch (error) {
      console.error(`❌ Search page request failed:`, error.message);
    }
  }

  if (!targetUrl) {
    console.log(`❌ No page found for "${title}".`);
    return null;
  }

  console.log(`🔗 Target URL: ${targetUrl}`);

  try {
    const { data: bookHtml } = await axios.get(targetUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const $book = cheerio.load(bookHtml);

    const bookTitle = $book('.page-title span').text().trim() || title;
    const remoteCoverUrl = $book('.prod_image img').first().attr('src');
    const localCoverPath = await downloadImage(remoteCoverUrl, baseSlug);

    const rawDescription = $book('.prod_desc_text').text().trim() || $book('#description').text().trim();
    const summary = extractDesc(rawDescription);
    const detailsList = await scrapeBookDetails(targetUrl);

    return {
      id: baseSlug,
      title: bookTitle,
      author: author || detailsList['Autor'] || null,
      year: detailsList['An apariție'] || null,
      category: category,
      buyUrl: targetUrl,
      description: summary,
      cover: localCoverPath
    };
  } catch (error) {
    console.error(`⚠️ Error fetching details from "${targetUrl}":`, error.message);
    return null;
  }
}

async function run() {
  const results = [];

  for (const item of titles) {
    const bookData = await scrapeBook(item);
    
    if (bookData) {
      results.push(bookData);
    }

    // ⏳ PAUSE HERE: Wait 1.5 to 3 seconds before moving to the next book!
    const delay = Math.floor(Math.random() * 1500) + 100;
    console.log(`⏳ Pausing ${delay}ms before next book...`);
    await sleep(delay);
  }

  fs.writeFileSync('./scripts/test-output.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Done! Check results in ./scripts/test-output.json');
}

run();