/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['reqres.in', 'cdn-icons-png.flaticon.com', 'upload.wikimedia.org', 'img.freepik.com']
  }
}

module.exports = nextConfig
