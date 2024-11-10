import React from 'react';

interface IImageBoxProps {
  topTypes: string | undefined;
  width: number;
  height: number;
}

const ImageBox = ({ topTypes, width, height }: IImageBoxProps) => {
  const imageSrc = topTypes ? `/images/${topTypes}.webp` : null;

  if (!imageSrc) {
    return <div>이미지를 찾을 수 없습니다.</div>;
  }

  return (
    <img
      src={imageSrc}
      alt={`${topTypes} 공룡 이미지`}
      width={width}
      height={height}
      className='rounded-lg'
      style={{ width, height }}
    />
  );
};

export default ImageBox;
