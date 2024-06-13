/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Disable SWC minification
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
      "firebasestorage.googleapis.com",

    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
