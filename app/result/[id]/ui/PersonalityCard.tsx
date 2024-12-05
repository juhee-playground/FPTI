import React, { useState } from 'react';

import CardFront from './CardFront';

import useInteract from '@/hooks/useInteract';

interface IPersonalityCardProps {
  fpti: string | undefined;
  type: string | undefined;
  result: { [group: string]: IScaleValue };
}

const PersonalityCard = ({ fpti, type, result }: IPersonalityCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const { rotation, transition, handleMove, handleLeave } = useInteract();

  const handleToggleFlip = () => setFlipped(!flipped);

  const rotateStyleF = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
      flipped ? 'rotateY(180deg)' : ''
    }`,
    transition,
  };

  const rotateStyleB = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
      flipped ? 'rotateY(0deg)' : ''
    }`,
    transition,
  };

  return (
    <div onClick={handleToggleFlip} className='card-container'>
      <div className={`card ${flipped ? 'rotate-y-180' : ''}`} onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <div className='card__back' style={rotateStyleB}>
          <img
            width={320}
            height={491}
            src='/bg-back.png'
            alt='카드 뒷면'
            className='border border-text-placeholder rounded-xl'
          />
        </div>

        <div className='card__front' style={rotateStyleF}>
          <CardFront fpti={fpti} type={type} result={result} />
        </div>
      </div>
    </div>
  );
};

export default PersonalityCard;
