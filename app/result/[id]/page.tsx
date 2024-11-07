'use client';

import React from 'react';

import { useSearchParams, useRouter } from 'next/navigation';

import { findResultById } from '@/api/result';
import TypeComparisonBar from '@/result/TypeComparisonBar';
import TypeDescription from '@/result/TypeDescription';
import ImageBox from '@/ui/ImageBox';
import { reconstructResultFromQueryString } from '@/utils/queryString';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const fpti = searchParams.get('fpti');
  const finalResult = searchParams.get('finalResult');
  const resultDescription = fpti ? findResultById(fpti) : null;
  const reconstructedResult = finalResult ? reconstructResultFromQueryString(finalResult) : null;

  const handleRetry = () => {
    router.push('/landing');
  };

  console.log(reconstructedResult);

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
    <div className='flex flex-col items-center p-6 bg-background text-white overflow-y-auto shadow-md gap-3'>
      <ImageBox topTypes={fpti as string} width={300} height={300} />
      <h3 className='flex flex-col items-center gap-1 text-text-basic'>
        <span className='w-40 h-8 bg-primary text-center rounded-lg font-medium text-lg border border-black'>
          {fpti}
        </span>
        <span className='text-xl'>{resultDescription?.type}</span>
      </h3>
      {reconstructedResult &&
        Object.entries(reconstructedResult).map(([group, values]) => {
          // values가 유효한지 확인
          if (!values || Object.entries(values).length < 2) {
            return null; // values가 유효하지 않으면 렌더링하지 않음
          }

          const [type1, percentage1] = Object.entries(values)[0];
          const [type2, percentage2] = Object.entries(values)[1];

          const midLabel = values.M ? 'M' : undefined;
          const isReverse = percentage2 > percentage1;
          return (
            <React.Fragment key={group}>
              <TypeComparisonBar
                startLabel={type1}
                midLabel={midLabel}
                endLabel={type2}
                percentage={Math.max(percentage1, percentage2)}
                isReverse={isReverse}
              />
            </React.Fragment>
          );
        })}
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
