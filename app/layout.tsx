import React from 'react';

import type { Metadata } from 'next';

import '@/app/styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fpti-test.netlify.app'),
  title: '풋피티아이 FPTI!!',
  description: '풋살에서 당신의 플레이 스타일은? FPTI 테스트로 나의 성향을 알아보고 최적의 팀 역할을 찾아보세요',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png', // 크롭 탭에 나오는 곳
    apple: '/apple-icon-60x60.png',
  },
  openGraph: {
    title: '내 풋살 성향 MBTI 테스트 - FPTI',
    description: '풋살에서 당신의 플레이 스타일은? FPTI 테스트로 나의 성향을 알아보고 최적의 팀 역할을 찾아보세요',
    url: 'https://fpti-test.netlify.app',
    siteName: 'FPTI',
    images: [
      {
        url: '/bg-landing.webp',
        width: 1200,
        height: 630,
        alt: '풋살 MBTI 테스트',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '내 풋살 성향 MBTI 테스트 - FPTI',
    description: '풋살에서 당신의 플레이 스타일은? FPTI 테스트로 나의 성향을 알아보고 최적의 팀 역할을 찾아보세요',
    images: ['/bg-landing.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
