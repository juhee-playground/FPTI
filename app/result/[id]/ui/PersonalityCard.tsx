import React, { useState } from 'react';

import CardFront from './CardFront';

import Glare from '@/app/result/[id]/ui/animation/Glare';
import Rotator from '@/app/result/[id]/ui/animation/Rotator';
import Shine from '@/app/result/[id]/ui/animation/Shine';
import useInteract from '@/hooks/useInteract';

interface IPersonalityCardProps {
  fpti: string | undefined;
  type: string | undefined;
  result: { [group: string]: IScaleValue };
}

const PersonalityCard = ({ fpti, type, result }: IPersonalityCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const { rotation, transition, dynamicStyles, handleMove, handleLeave } = useInteract();

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
    <div onClick={handleToggleFlip} className='card-container' onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Rotator rotationProps={rotation}>
        <Shine dynamicStylesProps={dynamicStyles}>
          <Glare dynamicStylesProps={dynamicStyles}>
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
          </Glare>
        </Shine>
      </Rotator>
    </div>
  );
};

export default PersonalityCard;
