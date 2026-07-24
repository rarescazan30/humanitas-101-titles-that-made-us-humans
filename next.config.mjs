/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/humanitas-101-titles-that-made-us-humans',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;