'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/quiz');
  };

  return (
    <main className='mx-auto shadow-md shadow-black/10 flex flex-col relative'>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('/bg-landing.png')" }}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-white mb-6'>FPTI: 풋살 MBTI</h1>
          <p className='text-lg font-medium text-white text-center mb-8 px-4'>
            풋살스타일로 알아보는 나의 풋살 성향은??
          </p>
          <button onClick={handleStart} className='button'>
            START
          </button>
        </div>
      </div>
    </main>
  );
}
