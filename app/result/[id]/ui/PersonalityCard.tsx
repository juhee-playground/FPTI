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
    <article onClick={handleToggleFlip} className='w-full max-w-md mx-auto relative' style={{ perspective: '1000px' }}>
      <div
        className={`relative w-full h-[491px] transition-transform duration-500 transform-style-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Back Face */}
        <div className='absolute inset-0 flex items-center justify-center backface-hidden transform rotate-y-180'>
          <img
            width={320}
            height={491}
            src='/bg-back.png'
            alt='카드 뒷면'
            className='border border-text-placeholder rounded-xl'
          />
        </div>

        {/* Front Face */}
        <div className='absolute inset-0 flex items-center justify-center backface-hidden'>
          <CardFront fpti={fpti} type={type} result={result} />
        </div>
      </div>
    </article>
  );
};

export default PersonalityCard;
