import { Metadata } from 'next';

import { findResultById } from '@/api/result';

interface IMetaDataProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: IMetaDataProps): Promise<Metadata> {
  const resultData = findResultById(params.id);

  if (!resultData) {
    return {
      title: '결과를 찾을 수 없습니다',
      description: '유효하지 않은 결과 페이지입니다.',
    };
  }

  return {
    title: `FPTI 결과 - ${resultData.type}`,
    description: resultData.description,
    openGraph: {
      title: `FPTI 결과 - ${resultData.type}`,
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
      title: `FPTI 결과 - ${resultData.type}`,
      description: resultData.description,
      images: [`/images/${params.id}.webp`],
    },
  };
}

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return <main className='mx-auto shadow-md shadow-black/10 flex flex-col relative'>{children}</main>;
}
