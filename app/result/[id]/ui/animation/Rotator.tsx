'use client';

import useInteract from '@/hooks/useInteract';

interface IRotatorProps {
  children: React.ReactNode;
}

const Rotator = ({ children }: IRotatorProps) => {
  const { handleMove, handleLeave } = useInteract();

  return (
    <div
      className='w-full h-full relative flex flex-wrap overflow-hidden'
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className='w-full h-full grid place-items-center transform-style-preserve-3d pointer-events-none overflow-hidden'>
        {children}
      </div>
    </div>
  );
};

export default Rotator;
