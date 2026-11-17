import React from 'react';

import TypeComparisonBar from '@/app/result/[id]/ui/TypeComparisonBar';

import styles from './CardPlayer.module.css';
import holoStyles from './HolographicEffects.module.css';

interface ICardFrontPlayerProps {
  fpti: string | undefined;
  type: string | undefined;
  result: { [group: string]: IScaleValue };
  holoType?: 'pokemon-v' | 'gold-star' | 'rainbow' | 'pokemon-vmax' | 'rare-shiny-vmax';
}

const CardFrontPlayer = ({ fpti, type, result, holoType = 'pokemon-v' }: ICardFrontPlayerProps) => {
  if (!process.env.NEXT_PUBLIC_IMAGE_URL) {
    throw new Error('NEXT_PUBLIC_IMAGE_URL is not defined!');
  }
  const imagePath = `/player_${fpti}`;

  // 홀로그램 클래스 적용
  const cardClasses = [styles.card, holoStyles['holo-card'], holoStyles[`holo-${holoType}`]].filter(Boolean).join(' ');

  return (
    <div
      className='bg-blue-100 w-full max-w-80 p-3 rounded-xl text-text-white'
      style={{
        background: '#1a1a1a',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      }}
    >
      <div
        className={cardClasses}
        style={{
          width: '295px',
          height: '464px',
          backgroundImage: `url("${imagePath}.webp")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className={styles.bgBoard}>
          <h3 className='flex flex-col items-center gap-1 text-text-white m-0'>
            <span className='w-40 h-7 bg-backgroundDarken2 text-center rounded-lg font-medium text-lg border border-basic'>
              {fpti}
            </span>
            <span className='text-lg'>{type}</span>
          </h3>
          {result &&
            Object.entries(result).map(([group, values]) => {
              if (!values || Object.entries(values).length < 2) return null;

              const [type1, percentage1] = Object.entries(values)[0];
              const [type2, percentage2] = Object.entries(values)[1];
              const midLabel = values.M ? 'M' : undefined;
              const isReverse = percentage2 > percentage1;

              return (
                <React.Fragment key={group}>
                  <TypeComparisonBar
                    startLabel={type1}
                    midLabel={midLabel}
                    endLabel={type2}
                    percentage={Math.max(percentage1, percentage2)}
                    isReverse={isReverse}
                  />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CardFrontPlayer;
