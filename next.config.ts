import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.englishsegments.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
