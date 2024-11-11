'use client';

import useMouse from '@/hooks/useMouse';

interface IRotatorProps {
  children: React.ReactNode;
  rotationProps?: { x: number; y: number };
  positionProps?: { x: number; y: number };
}

const Rotator = ({ children, rotationProps }: IRotatorProps) => {
  const { rotation, handleMouseMove, handleMouseLeave } = useMouse();
  const rotationValue = rotationProps || rotation;

  const rotateStyle = {
    transform: `perspective(450px) rotateX(${rotationValue.x}deg) rotateY(${rotationValue.y}deg)`,
  };

  return (
    <div
      className='w-full h-full relative flex flex-wrap overflow-hidden'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={rotateStyle}>{children}</div>
    </div>
  );
};

export default Rotator;
