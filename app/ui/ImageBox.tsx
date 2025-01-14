import React from 'react';

import Image from 'next/image';

interface IImageBoxProps {
  topTypes: string | undefined;
  width: number;
  height: number;
}

const ImageBox = ({ topTypes, width = 240, height = 240 }: IImageBoxProps) => {
  const imageSrc = topTypes ? `${topTypes}.webp` : null;

  if (!imageSrc) {
    return <div>이미지를 찾을 수 없습니다.</div>;
  }

  return (
    <Image
      src={imageSrc}
      alt={`${topTypes} 공룡 이미지`}
      className='rounded-lg'
      width={width}
      height={height}
      priority={false}
      style={{ width: width, height: height }}
    />
  );
};

export default ImageBox;
