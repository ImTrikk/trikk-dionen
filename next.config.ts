import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode: true,
 eslint: {
  ignoreDuringBuilds: true, // Add this line to ignore ESLint warnings during builds
 },
 webpack: (config) => {
  config.module.rules.push({
   test: /\.(mp3|wav)$/,
   type: "asset/resource",
   generator: {
    filename: "static/media/[name].[hash][ext]",
   },
  });
  return config;
 },
};

export default nextConfig;
