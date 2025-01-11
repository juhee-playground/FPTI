import { Metadata } from 'next';

import { findResultById } from '@/api/result';

interface Props {
  params: { id: string }; // 동적 경로 (예: /result/[id])
  searchParams: { [key: string]: string | string[] | undefined }; // URL 쿼리 파라미터
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resultData = findResultById(params.id);

  if (!resultData) {
    return {
      title: '결과를 찾을 수 없습니다',
      description: '유효하지 않은 결과 페이지입니다.',
    };
  }

  return {
    title: `${resultData.type} - FPTI 결과`,
    description: resultData.description,
    openGraph: {
      title: `${resultData.type} - FPTI 결과`,
      description: resultData.description,
      images: [
        {
          url: `/images/${params.id}.webp`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${resultData.type} - FPTI 결과`,
      description: resultData.description,
      images: [`/images/${params.id}.webp`],
    },
  };
}

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return <main className='mx-auto shadow-md shadow-black/10 flex flex-col relative'>{children}</main>;
}
