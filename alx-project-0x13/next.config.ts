import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "prlabsapi.com",
      // أضف أي دومينات أخرى تحتاجها هنا
    ],
  },
};

export default nextConfig;
