import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Wrapper, Overlay, Title, Subtitle } from './LandingPage.styles';
import { DefaultButton } from '../src/components/common/button/Button.styles';

export default function Home() {
  const router = useRouter();

  const handleStart = (): void => {
    router.push('/quiz');
  };

  return (
    <main className='container'>
      <h2>Welcome!</h2>
      <h3>Hello, Next.js</h3>
      <Link href='/quiz' rel='quiz page'></Link>
      <Wrapper>
        <Overlay>
          <Title>FPTI: 풋살 MBTI</Title>
          <Subtitle>풋살스타일로 알아보는 나의 풋살 성향은??</Subtitle>
          <DefaultButton onClick={handleStart}>START</DefaultButton>
        </Overlay>
      </Wrapper>
    </main>
  );
}
