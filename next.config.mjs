/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cos.codefe.top','ityoung-blog.oss-cn-hangzhou.aliyuncs.com'],
  }
}

export default nextConfig
