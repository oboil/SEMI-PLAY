import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  // functions 폴더 제외
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/functions/**", "**/node_modules/**"],
    };
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.instagram.com",
        pathname: "/p/**",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent-**.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
