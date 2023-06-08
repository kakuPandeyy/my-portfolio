/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
}

module.exports = nextConfig

