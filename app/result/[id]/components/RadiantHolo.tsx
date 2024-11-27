'use client';

import styles from '@/app/result/[id]/ui/animation/RadiantHolo.module.css';
import useInteract from '@/hooks/useInteract';

interface IRotatorProps {
  children: React.ReactNode;
  dynamicStylesProps?: React.CSSProperties;
  radiant: boolean;
  holo: boolean;
}

const RadiantHolo = ({ children, dynamicStylesProps, radiant = true, holo = true }: IRotatorProps) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className={styles.container}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      {radiant && <div className={styles.radiant} />}
      {holo && <div className={`${styles.radiant} ${styles['radiant--holo']}`} />}
      {children}
    </div>
  );
};

export default RadiantHolo;
