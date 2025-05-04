import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
