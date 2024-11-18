import React from 'react';

import Glare from '@/app/result/[id]/components/Glare';
import Holo from '@/app/result/[id]/components/Holo';
import Radiant from '@/app/result/[id]/components/Radiant';
import styles from '@/app/result/[id]/components/RadiantHolo.module.css';
import Shine from '@/app/result/[id]/components/Shine';
import useInteract from '@/hooks/useInteract';

interface RadiantHoloProps {
  children?: React.ReactNode;
  dynamicStylesProps?: React.CSSProperties;
  radiant: boolean;
  holo: boolean;
}

const RadiantHolo: React.FC<RadiantHoloProps> = ({ children, dynamicStylesProps, radiant, holo }) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className={`${styles.container}`}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      <div className={styles.effectsLayer}>
        {radiant && <Radiant />}
        {holo && <Holo />}
      </div>
      <Shine />
      {children}
      <Glare />
    </div>
  );
};

export default RadiantHolo;
