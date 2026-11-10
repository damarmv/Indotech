import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages serves this custom domain from the site root.
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Static exports use local image files and do not need the image API.
    unoptimized: true,
  },
};

export default nextConfig;
