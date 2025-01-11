'use client';

import React from 'react';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { findResultById } from '@/api/result';
import ResultCard from '@/app/result/[id]/ui/ResltCard';
import TypeDescription from '@/app/result/[id]/ui/TypeDescription';
import { reconstructResultFromQueryString } from '@/utils/queryString';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const fpti = pathname.split('/').pop();
  const finalResultRaw = searchParams.get('finalResult');

  const finalResult = finalResultRaw ? decodeURIComponent(finalResultRaw) : '';
  const resultDescription = fpti ? findResultById(fpti) : null;
  const reconstructedResult = reconstructResultFromQueryString(finalResult);

  const handleRetry = () => {
    router.push('/');
  };

  const handleShare = async () => {
    const currentUrl = window.location.href;
    const shareData = {
      title: '나의 FPTI를 공유할께~',
      text: '너의 FPTI도 공유해줘!!',
      url: currentUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('성공적으로 공유되었습니다!');
      } else {
        navigator.clipboard.writeText(currentUrl);
        alert('이 브라우저는 공유 기능을 지원하지 않아서 링크를 복사했습니다.');
      }
    } catch (error) {
      console.error('공유 중 오류 발생:', error);
    }
  };

  return (
    <div className='flex flex-col items-center bg-background text-white overflow-y-auto py-6 gap-3 h-screen'>
      <ResultCard fpti={fpti} type={resultDescription?.type} result={reconstructedResult} />
      <TypeDescription content={resultDescription} />
      <div className='flex justify-between items-center w-full'>
        <button
          onClick={handleRetry}
          className='bg-secondaryLight text-white px-6 py-4 rounded-md text-lg font-semibold hover:bg-secondaryOpacity'
        >
          검사 다시하기
        </button>
        <button
          onClick={handleShare}
          className='bg-secondaryLight text-white px-6 py-4 rounded-md text-lg font-semibold hover:bg-secondaryOpacity'
        >
          링크 공유하기
        </button>
      </div>
    </div>
  );
}
