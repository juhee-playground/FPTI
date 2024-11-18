import { ReactNode } from 'react';

import styles from '@/app/result/[id]/ui/animation/Shine.module.css';
import useInteract from '@/hooks/useInteract';

interface IShineProps {
  children: ReactNode; // 카드 내용
  dynamicStylesProps?: React.CSSProperties; // 외부 스타일 주입 옵션
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
