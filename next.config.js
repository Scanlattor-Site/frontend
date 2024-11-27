/** @type {import('next').NextConfig} */
const nextConfig = {
  /* images: {
    unoptimized: true,
  },
  output: 'standalone', */
  images: {
    domains: ['res.cloudinary.com', 'i.pinimg.com'],
  },
}

module.exports = nextConfig
