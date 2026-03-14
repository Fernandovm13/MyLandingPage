/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MyLandingPage',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
