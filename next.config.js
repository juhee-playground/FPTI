/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['juhee100bucket.s3.ap-northeast-2.amazonaws.com'], // 외부 이미지 호스트 추가
  },
};

export default nextConfig;
