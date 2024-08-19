/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Null Registry',
    description: 'My personal Kasm registry.',
    icon: 'https://gcdn.thunderstore.io/live/repository/icons/DevNull-DevNullCardPack-0.9.0.png.256x256_q95.png',
    listUrl: 'https://github.com/indevnull/NullRegistry/',
    contactUrl: 'https://github.com/indevnull/NullRegistry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
