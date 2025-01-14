import React, { useState } from 'react';

import Glare from '@/app/result/[id]/ui/animation/Glare';
import RadiantHoloPattern from '@/app/result/[id]/ui/animation/RadiantHoloPattern';
import Rotator from '@/app/result/[id]/ui/animation/Rotator';
import CardFront from '@/app/result/[id]/ui/CardFront';
import useInteract from '@/hooks/useInteract';

import styles from './Card.module.css';

interface IResultCardProps {
  fpti?: string;
  type: string | undefined;
  result: { [group: string]: IScaleValue };
}

const ResultCard = ({ fpti = 'SAPE', type, result }: IResultCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const { rotation, transition, dynamicStyles, handleMove, handleLeave } = useInteract();

  const handleToggleFlip = () => setFlipped(!flipped);

  const rotateStyleF = {
    transform: `perspective(1000px) ${flipped ? 'rotateY(180deg)' : ''}`,
    transition,
  };

  const rotateStyleB = {
    transform: `perspective(1000px) ${flipped ? 'rotateY(0deg)' : ''}`,
    transition,
  };

  return (
    <div
      className={styles['card-container']}
      onClick={handleToggleFlip}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <Rotator rotationProps={rotation}>
        <RadiantHoloPattern
          dynamicStylesProps={dynamicStyles}
          isFlipped={flipped}
          radiant={false}
          holo={true}
          fpti={fpti}
        >
          <Glare dynamicStylesProps={dynamicStyles}>
            <div className={styles['card']}>
              <div className={styles['card__back']} style={rotateStyleB}>
                <img
                  width={320}
                  height={491}
                  src='/bg_back.png'
                  alt='카드 뒷면'
                  className='border border-text-placeholder rounded-xl'
                />
              </div>

              <div className={styles['card__front']} style={rotateStyleF}>
                <CardFront fpti={fpti} type={type} result={result} />
              </div>
            </div>
          </Glare>
        </RadiantHoloPattern>
      </Rotator>
    </div>
  );
};

export default ResultCard;
