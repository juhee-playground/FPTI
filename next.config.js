/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fpti-test.netlify.app'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'juhee100bucket.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/image-fpti/**',
      },
    ],
  },
};

export default nextConfig;
