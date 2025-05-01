import React from 'react';
import styles from './HolographicCard.module.css';

interface IHolographicCardProps {
  fpti: string;
  type: string;
  result: { [group: string]: IScaleValue };
  variant?: 'subtle-v' | 'soft-gold' | 'gentle-rainbow';
}

const HolographicCard = ({ fpti, type, result, variant = 'subtle-v' }: IHolographicCardProps) => {
  const imagePath = `/player_${fpti}`;
  
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles[`variant-${variant}`]}`}>
        <div className={styles.cardContent}>
          <img 
            src={`${imagePath}.webp`}
            alt={`${type} 캐릭터 카드`}
            className={styles.cardImage}
          />
          <div className={styles.cardInfo}>
            <h3 className={styles.cardTitle}>
              <span className={styles.fptiTag}>{fpti}</span>
              <span className={styles.typeText}>{type}</span>
            </h3>
            {result && Object.entries(result).map(([group, values]) => {
              if (!values || Object.entries(values).length < 2) return null;
              const [type1, percentage1] = Object.entries(values)[0];
              const [type2, percentage2] = Object.entries(values)[1];
              return (
                <div key={group} className={styles.statRow}>
                  <span className={styles.statLabel}>{group}</span>
                  <div className={styles.statBar}>
                    <div 
                      className={styles.statFill} 
                      style={{ width: `${Math.max(percentage1, percentage2)}%` }} 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolographicCard; 