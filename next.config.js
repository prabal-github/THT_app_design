/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: { domains: ['lh3.googleusercontent.com','i.imgur.com', 'pasteboard.co', 'ibb.co'], formats: ['image/avif', 'image/webp'], },
  images: { domains: ['*'] },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
