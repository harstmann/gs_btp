/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || process.env.DEPLOY_TARGET === 'gh-pages'

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/gs.btp' : '',
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
