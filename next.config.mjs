/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MyLandingPage',
  assetPrefix: '/MyLandingPage/', // Ensures assets like CSS/JS are prefixed
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
