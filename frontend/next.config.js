/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_API_PROTOCOL || 'http',
        hostname: process.env.NEXT_PUBLIC_API_HOST || 'localhost',
        port: process.env.NEXT_PUBLIC_API_PORT || '1337',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
