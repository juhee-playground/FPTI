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
              isSelected ? 'bg-transparent' : 'bg-button-basic'
            } hover:bg-primary-default border border-black`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            {isSelected && (
              <Image
                src='/images/apple-icon-60x60.webp'
                alt='Selected'
                width={size}
                height={size}
                priority={false}
                className='rounded-full bg-white'
              />

              //   <img
              //   width={size}
              //   height={size}
              //   src='/apple-icon-60x60.png'
              //   alt='Selected Answer'
              //   className='rounded-full bg-white'
              // />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CircleSelector;
