import { ReactNode } from 'react';

import styles from '@/app/result/[id]/ui/animation/Shine.module.css';
import useInteract from '@/hooks/useInteract';

interface IShineProps {
  children: ReactNode;
  dynamicStylesProps?: React.CSSProperties;
}

const Shine = ({ children, dynamicStylesProps }: IShineProps) => {
  const { interacting, handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className={styles['wrapper-shine']}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      <div
        key={interacting ? 'active' : 'inactive'}
        className={styles.shine}
        style={{
          opacity: interacting ? 1 : 0.7,
          transform: interacting ? 'scale(1)' : 'scale(1.1)',
        }}
      />
      {children}
    </div>
  );
};

export default Shine;
