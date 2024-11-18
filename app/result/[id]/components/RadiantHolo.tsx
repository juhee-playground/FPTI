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
}

const RadiantHolo: React.FC<RadiantHoloProps> = ({ children, dynamicStylesProps }) => {
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
      {children}
      <Radiant />
      <Holo />
      <Shine />
      <Glare />
    </div>
  );
};

export default RadiantHolo;
