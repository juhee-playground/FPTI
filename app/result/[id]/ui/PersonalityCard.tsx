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
    <div onClick={handleToggleFlip} className='relative w-96 h-96 perspective cursor-pointer'>
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face */}
        <div className='absolute w-full h-full backface-hidden transform-style-preserve-3d'>
          <CardFront fpti={fpti} type={type} result={result} />
        </div>
        {/* Back Face */}
        <div className='absolute w-full h-full rotate-y-180 backface-hidden transform-style-preserve-3d'>
          <CardBack />
        </div>
      </div>
    </div>
  );
};

export default PersonalityCard;
