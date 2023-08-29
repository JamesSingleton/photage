/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './lib/cloudinaryLoader.ts',
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
