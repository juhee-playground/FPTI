import React, { ReactNode } from 'react';

import styles from '@/app/result/[id]/ui/animation/Glare.module.css';
import useInteract from '@/hooks/useInteract';

interface IGlareProps {
  children: ReactNode; // 카드 내용
  dynamicStylesProps?: React.CSSProperties; // 외부 스타일 주입 옵션
}

const Glare = ({ children, dynamicStylesProps }: IGlareProps) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract(); // 마우스 위치 정보 가져오기
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
