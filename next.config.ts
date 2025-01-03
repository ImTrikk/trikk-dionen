import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
