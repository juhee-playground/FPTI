import React, { ReactNode } from 'react';

import styles from './RadiantHolo.module.css';

import useInteract from '@/hooks/useInteract';

interface IHoloProps {
  children: ReactNode;
  dynamicStylesProps?: React.CSSProperties;
}

const Holo = ({ children, dynamicStylesProps }: IHoloProps) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className={styles.container}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      <div className={`${styles.radiant} ${styles['radiant--holo']}`} />
      {children}
    </div>
  );
};

export default Holo;
