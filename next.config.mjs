/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MyLandingPage',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
