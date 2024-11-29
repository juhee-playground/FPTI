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
  const { rotation, handleMove, handleLeave } = useInteract();

  const handleToggleFlip = () => setFlipped(!flipped);

  const rotateStyleF = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
      flipped ? 'rotateY(180deg)' : ''
    }`,
  };

  const rotateStyleB = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
      flipped ? 'rotateY(0deg)' : ''
    }`,
  };

  //TODO: card 뒷면 맞추기...

  return (
    <article onClick={handleToggleFlip} className='card-container'>
      <div className={`card ${flipped ? 'rotate-y-180' : ''}`} onMouseMove={handleMove} onMouseLeave={handleLeave}>
        {/* Back Face */}
        <div className='card__back' style={rotateStyleB}>
          <img
            width={320}
            height={491}
            src='/bg-back.png'
            alt='카드 뒷면'
            className='border border-text-placeholder rounded-xl'
          />
        </div>

        {/* Front Face */}
        <div className='card__front' style={rotateStyleF}>
          <CardFront fpti={fpti} type={type} result={result} />
        </div>
      </div>
    </article>
  );
};

export default PersonalityCard;
