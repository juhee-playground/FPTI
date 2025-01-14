import React, { ReactNode } from 'react';

import useInteract from '@/hooks/useInteract';

import styles from './Holo.module.css';

interface IHoloProps {
  children: ReactNode;
  dynamicStylesProps?: React.CSSProperties;
}

const HoloPattern = ({ children, dynamicStylesProps }: IHoloProps) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className={styles.container}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      <div className={`${styles['holo']}`} />
      {children}
    </div>
  );
};

export default HoloPattern;
