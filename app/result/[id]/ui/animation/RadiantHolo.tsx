'use client';

interface IRotatorProps {
  children: React.ReactNode;
  rotationProps?: { x: number; y: number };
}

const RadiantHolo = ({ children }: IRotatorProps) => {
  return <div className='w-full h-full relative flex flex-wrap overflow-hidden'>{children}</div>;
};

export default RadiantHolo;
