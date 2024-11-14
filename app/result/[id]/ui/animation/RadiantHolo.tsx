'use client';

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
      className='w-full h-full relative flex flex-wrap justify-center items-center overflow-hidden'
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      {radiant && <div className='radiant' />}
      {holo && <div className='radiant radiant--holo' />}
      {children}
    </div>
  );
};

export default RadiantHolo;
