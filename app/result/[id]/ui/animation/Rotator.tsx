'use client';

import useInteract from '@/hooks/useInteract';

interface IRotatorProps {
  children: React.ReactNode;
  rotationProps?: { x: number; y: number };
}

const Rotator = ({ children, rotationProps }: IRotatorProps) => {
  const { rotation, handleMove, handleLeave } = useInteract();

  const rotationValue = rotationProps || rotation;

  const rotateStyle = {
    transform: `perspective(450px) rotateX(${rotationValue.x}deg) rotateY(${rotationValue.y}deg)`,
  };

  return (
    <div
      className='w-full h-full relative flex flex-wrap overflow-hidden'
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        className='w-full h-full grid place-items-center transform-style-preserve-3d pointer-events-none overflow-hidden'
        style={rotateStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Rotator;
