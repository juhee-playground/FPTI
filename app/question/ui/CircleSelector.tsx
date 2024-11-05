import Image from 'next/image';

const circleSizes = [48, 40, 34, 34, 40, 48];

interface ICircleSelectorProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const CircleSelector = ({ selectedValue, onSelect }: ICircleSelectorProps) => {
  const handleClick = (index: number) => {
    const normalizedValue = (index / (circleSizes.length - 1)) * 100;
    onSelect(normalizedValue);
  };

  return (
    <div className='flex justify-between items-center py-5 gap-4'>
      {circleSizes.map((size, index) => {
        const normalizedValue = (index / (circleSizes.length - 1)) * 100;
        const isSelected = selectedValue !== null && selectedValue === normalizedValue;

        return (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 ${
              isSelected ? 'bg-transparent' : 'bg-gray-200'
            } hover:bg-green-500 border border-gray-800`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            {isSelected && (
              <Image src='/icon-ball.png' alt='Selected' width={size} height={size} className='rounded-full bg-white' />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CircleSelector;
