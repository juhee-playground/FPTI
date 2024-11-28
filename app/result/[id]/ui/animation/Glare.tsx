import React, { ReactNode } from 'react';

import styles from '@/app/result/[id]/ui/animation/Glare.module.css';
import useInteract from '@/hooks/useInteract';

interface IGlareProps {
  children: ReactNode;
  dynamicStylesProps?: React.CSSProperties;
}

const Glare = ({ children, dynamicStylesProps }: IGlareProps) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className={styles.container}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      <div className={styles.glare} />
      {children}
    </div>
  );
};

export default Glare;
