import React from 'react';

import type { Metadata } from 'next';

import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'FPTI',
  description: 'FPTI landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
