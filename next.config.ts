import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
};

export default nextConfig;
