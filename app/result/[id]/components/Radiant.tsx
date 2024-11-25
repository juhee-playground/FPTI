import React, { ReactNode } from 'react';

import styles from './Radiant.module.css';

import useInteract from '@/hooks/useInteract';

interface IHoloProps {
  children: ReactNode;
  dynamicStylesProps?: React.CSSProperties;
}

const Radiant = ({ children, dynamicStylesProps }: IHoloProps) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  console.log(appliedStyles);

  return (
    <div
      className={styles.container}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      <div className={styles.radiant} />
      {children}
    </div>
  );
};

export default Radiant;
