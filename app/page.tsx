import React from 'react';

import Link from 'next/link';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <h2 className='text-center text-2xl font-semibold mt-8'>Welcome!</h2>
      <h3 className='text-center text-xl font-medium mt-4'>Hello, Next.js</h3>
      <Link href='/quiz' rel='quiz page' className='hidden'></Link>

      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('/bg-landing.png')" }}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-white mb-6'>FPTI: 풋살 MBTI</h1>
          <p className='text-lg font-medium text-indigo-300 text-center mb-8 px-4'>
            풋살스타일로 알아보는 나의 풋살 성향은??
          </p>
          {/* <button onClick={handleStart} className="bg-blue-500 text-white px-4 py-2 rounded-md">START</button> */}
        </div>
      </div>
    </main>
  );
}
