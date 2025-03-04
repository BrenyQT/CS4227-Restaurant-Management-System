import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Since Next.js Image Optimization doesn't work with static exports
  },
  assetPrefix: './',
  basePath: '/CS4227-Restaurant-Management-System',
};

export default nextConfig;
