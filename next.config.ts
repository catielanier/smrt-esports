import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '',
  images: {
    unoptimized: true,
    domains: [],
  },
  trailingSlash: true,
};

export default nextConfig;
