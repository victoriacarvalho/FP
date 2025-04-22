import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: 'ubgvu032x1.ufs.sh' }],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
