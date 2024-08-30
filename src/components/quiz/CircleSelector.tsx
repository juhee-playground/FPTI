import { useState } from 'react';

import { Container, Circle, BallImage } from './CircleSelector.styles';

import ballImage from '@/assets/icon-ball.png';

const circleSizes = [48, 40, 32, 24, 32, 40, 48]; // 원의 크기 배열

interface ICircleSelectorProps {
  onSelect: (value: number) => void;
}

const CircleSelector = ({ onSelect }: ICircleSelectorProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>();

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    const normalizedValue = (index / (circleSizes.length - 1)) * 100;
    onSelect(normalizedValue);
  };

  return (
    <Container>
      {circleSizes.map((size, index) => (
        <Circle key={index} $size={size} onClick={() => handleClick(index)} $selected={index === selectedIndex}>
          {index === selectedIndex && <BallImage src={ballImage} alt='Selected' />}
        </Circle>
      ))}
    </Container>
  );
};

export default CircleSelector;
