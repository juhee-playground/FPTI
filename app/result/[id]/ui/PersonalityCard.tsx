import React, { useState } from 'react';

import CardBack from './CardBack';
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
    <div
      onClick={handleToggleFlip}
      className='relative w-96 h-96 perspective cursor-pointer'
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative h-full transition-transform duration-500`}
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Face */}
        <div
          className='absolute w-full h-full'
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <CardFront fpti={fpti} type={type} result={result} />
        </div>
        {/* Back Face */}
        <div
          className='absolute w-full h-full'
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <CardBack />
        </div>
      </div>
    </div>
  );
};

export default PersonalityCard;
