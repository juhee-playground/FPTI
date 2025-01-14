/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'juhee100bucket.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/image-fpti/**',
      },
      {
        protocol: 'https',
        hostname: 'fpti-test.netlify.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
