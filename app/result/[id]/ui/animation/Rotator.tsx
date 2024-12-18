'use client';

import styles from '@/app/result/[id]/ui/animation/Shine.module.css';
import useInteract from '@/hooks/useInteract';

interface IRotatorProps {
  children: React.ReactNode;
  rotationProps: TRotation;
  isFlipped: boolean;
}

const Rotator = ({ children, rotationProps, isFlipped }: IRotatorProps) => {
  const { handleMove, handleLeave, rotation, transition } = useInteract();
  const rotationValue = rotationProps || rotation;

  const rotateStyle = {
    transform: `perspective(450px) rotateX(${rotationValue.x}deg) rotateY(${rotationValue.y}deg)`,
    transition,
  };

  return (
    <div className={styles.container} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div style={rotateStyle} className={`${isFlipped ? 'rotate-y-180' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Rotator;
