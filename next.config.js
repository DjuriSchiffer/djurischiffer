/** @type {import('next').NextConfig} */

// next.config.js
nextConfig = {
  reactStrictMode: true,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: [process.env.NEXT_PUBLIC_WORDPRESS_API_URL],
  },
};

module.exports = nextConfig;
