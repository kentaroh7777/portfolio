import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Fix "inferred workspace root" issues when multiple lockfiles exist on the machine.
  // This forces Turbopack to treat this repo as the workspace root.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig