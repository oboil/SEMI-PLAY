import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // functions 폴더 제외
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/functions/**", "**/node_modules/**"],
    };
    return config;
  },
};

export default nextConfig;
