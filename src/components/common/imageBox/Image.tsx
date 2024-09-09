interface IimageBoxProps {
  topTypes: string | undefined;
  width: number;
  height: number;
}
const images = import.meta.glob<{ default: string }>(`/src/assets/*.webp`, { eager: true });

const ImageBox = ({ topTypes, width, height }: IimageBoxProps) => {
  const imageName = `/src/assets/${topTypes}.webp`;
  const imageSrc = images[imageName]?.default;
  console.log(imageSrc);

  if (!imageSrc) {
    return <div>이미지를 찾을 수 없습니다.</div>;
  }

  return <img src={imageSrc} alt={`${topTypes} 공룡 이미지`} width={width} height={height} />;
};

export default ImageBox;
