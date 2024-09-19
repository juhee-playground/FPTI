import React from 'react';

import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>풋피티아이 FPTI!!</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
