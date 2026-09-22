import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: '/nextjs-portfolio',
  assetPrefix: '/nextjs-portfolio/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
