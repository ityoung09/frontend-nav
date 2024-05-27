/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cos.codefe.top','ityoung-blog.oss-cn-hangzhou.aliyuncs.com'],
  }
}

export default nextConfig
