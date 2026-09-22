/** @type {import('next').NextConfig} */

// GitHub replaces dots with underscores in Pages URLs
// repo: harstmann/gs.btp → URL: harstmann.github.io/gs_btp
const repoName = 'gs_btp'

const nextConfig = {
  output: 'export',
  // Always set basePath so assets are loaded from the correct subpath
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || `/${repoName}`,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
