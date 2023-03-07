/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})


const nextConfig = withPWA({
  images: { domains: ['lh3.googleusercontent.com','i.imgur.com', 'pasteboard.co', 'ibb.co'], formats: ['image/avif', 'image/webp'], },
  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig
