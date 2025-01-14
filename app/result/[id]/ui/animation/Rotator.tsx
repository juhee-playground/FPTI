'use client';

import styles from '@/app/result/[id]/ui/animation/Rotator.module.css';
import useInteract from '@/hooks/useInteract';

interface IRotatorProps {
  children: React.ReactNode;
  rotationProps: TRotation;
}

const Rotator = ({ children, rotationProps }: IRotatorProps) => {
  const { handleMove, handleLeave, rotation, transition, isMobile } = useInteract();
  const rotationValue = rotationProps || rotation;

  const rotateStyle = {
    transform: `perspective(450px) rotateX(${rotationValue.x}deg) rotateY(${rotationValue.y}deg)`,
    transition,
  };

  return (
    <div
      className={`${styles['wrapper-rotator']}`}
      style={!isMobile ? rotateStyle : {}}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
};

export default Rotator;
