import React, { useState } from 'react';

import CardFront from './CardFront';

interface IPersonalityCardProps {
  fpti: string | undefined;
  type: string | undefined;
  result: { [group: string]: IScaleValue };
}

const PersonalityCard = ({ fpti, type, result }: IPersonalityCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleToggleFlip = () => setFlipped(!flipped);

  return (
    <div onClick={handleToggleFlip} className='w-full h-full ' style={{ perspective: '1000px' }}>
      <div
        className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Back Face */}
        <div className='flex items-center justify-center absolute w-full h-full backface-hidden transform rotate-y-180'>
          <img
            width={345.59}
            height={491}
            src='/bg-back.png'
            alt='카드 뒷면'
            className='border border-text-placeholder rounded-xl'
          />
        </div>
        {/* Front Face */}

        <div className='flex items-center justify-center absolute w-full h-full backface-hidden'>
          <CardFront fpti={fpti} type={type} result={result} />
        </div>
      </div>
    </div>
  );
};

export default PersonalityCard;
