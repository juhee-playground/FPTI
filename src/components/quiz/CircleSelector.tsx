import { Container, Circle, BallImage } from './CircleSelector.styles';

import ballImage from '@/assets/icon-ball.png';

const circleSizes = [48, 40, 32, 32, 40, 48];

interface ICircleSelectorProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const CircleSelector = ({ selectedValue, onSelect }: ICircleSelectorProps) => {
  const handleClick = (index: number) => {
    const normalizedValue = (index / (circleSizes.length - 1)) * 100;
    onSelect(normalizedValue); // 선택된 값을 부모 컴포넌트로 전달
  };

  return (
    <Container>
      {circleSizes.map((size, index) => {
        const normalizedValue = (index / (circleSizes.length - 1)) * 100;
        const isSelected = selectedValue !== null && selectedValue === normalizedValue;

        return (
          <Circle key={index} $size={size} onClick={() => handleClick(index)} $selected={isSelected}>
            {isSelected && <BallImage src={ballImage} alt='Selected' />}
          </Circle>
        );
      })}
    </Container>
  );
};

export default CircleSelector;
