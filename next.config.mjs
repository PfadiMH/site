/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "pfadimh-site-directus",
        port: "8055",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
