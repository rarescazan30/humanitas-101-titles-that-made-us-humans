import fs from 'fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

async function verifyRange(startIndex, count) {
  const fileContent = fs.readFileSync('./lib/books.ts', 'utf8');
  const match = fileContent.match(/export const books: Book\[\] = (\[[\s\S]*?\]);/);
  if (!match) {
    console.error('Could not parse books from lib/books.ts');
    process.exit(1);
  }

  const allBooks = eval(match[1]);
  const targetBooks = allBooks.slice(startIndex, startIndex + count);

  console.log(`\nVerifying books ${startIndex + 1} to ${startIndex + targetBooks.length}...\n`);

  const results = await Promise.all(
    targetBooks.map(async (b, idx) => {
      const pos = startIndex + idx + 1;
      if (!b.buyUrl) {
        return { pos, title: b.title, status: 'NO_URL', pageTitle: 'N/A', url: 'N/A', error: true };
      }

      try {
        const res = await axios.get(b.buyUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          },
          timeout: 6000
        });

        const $ = cheerio.load(res.data);
        const pageTitle = $('h1, .page-title, .product-title, title').first().text().replace(/\s+/g, ' ').trim();
        const is404 = res.data.includes('<body>404</body>') || res.data.includes('Pagina nu a fost gasita');

        return {
          pos,
          title: b.title,
          status: is404 ? '404' : res.status,
          pageTitle,
          url: b.buyUrl,
          error: is404
        };
      } catch (err) {
        return {
          pos,
          title: b.title,
          status: err.response?.status || 'ERR',
          pageTitle: 'Error fetching',
          url: b.buyUrl,
          error: true,
          errMessage: err.message
        };
      }
    })
  );

  console.log(JSON.stringify(results, null, 2));
}

const start = parseInt(process.argv[2] || '15', 10);
const count = parseInt(process.argv[3] || '15', 10);
verifyRange(start, count);
