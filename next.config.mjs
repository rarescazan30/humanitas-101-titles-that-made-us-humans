const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export',
        basePath: '/humanitas-101-titles-that-made-us-humans',
      }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
