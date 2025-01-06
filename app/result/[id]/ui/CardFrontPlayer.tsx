import React from 'react';

import styles from './CardPlayer.module.css';

import TypeComparisonBar from '@/app/result/[id]/ui/TypeComparisonBar';

interface ICardFrontProps {
  fpti: string | undefined;
  type: string | undefined;
  result: { [group: string]: IScaleValue };
}

const CardFront = ({ fpti, type, result }: ICardFrontProps) => {
  if (!process.env.NEXT_PUBLIC_IMAGE_URL) {
    throw new Error('NEXT_PUBLIC_IMAGE_URL is not defined!');
  }
  // const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL.replace(/^"|"$/g, '');
  // const imagePath = `${imageUrl}/image-fpti/${fpti}`;
  const imagePath = `/player_${fpti}`;
  return (
    <div className='bg-white w-full max-w-80 p-3 border border-text-placeholder rounded-xl text-text-white'>
      <div
        className={styles.card}
        style={{
          width: '295px',
          height: '460px',
          backgroundImage: `url("${imagePath}.webp")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
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

export default CardFront;
