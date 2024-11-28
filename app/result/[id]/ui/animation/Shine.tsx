import { ReactNode } from 'react';

import styles from '@/app/result/[id]/ui/animation/Shine.module.css';
import useInteract from '@/hooks/useInteract';

interface IShineProps {
  children: ReactNode;
  dynamicStylesProps?: React.CSSProperties;
}

const Shine = ({ children, dynamicStylesProps }: IShineProps) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className={styles.container}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      <div className={styles.shine} />
      {children}
    </div>
  );
};

export default Shine;
