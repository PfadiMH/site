/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: String(process.env.NEXT_PUBLIC_API_PROTOCOL),
        hostname: String(process.env.NEXT_PUBLIC_API_HOST),
        port: String(process.env.NEXT_PUBLIC_API_PORT),
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'mystrapi',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
