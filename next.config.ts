import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Build errors ko ignore karne ke liye */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;