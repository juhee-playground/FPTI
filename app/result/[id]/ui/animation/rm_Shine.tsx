import useInteract from '@/hooks/useInteract';

interface IShineProps {
  children: React.ReactNode;
  dynamicStylesProps?: React.CSSProperties;
}

const Shine = ({ children, dynamicStylesProps }: IShineProps) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='shine__wrapper w-full h-full relative flex overflow-hidden'
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      <div className='shine absolute inset-0 pointer-events-none z-10'></div>
      <div className='w-full h-full grid place-items-center transform-style-preserve-3d'>{children}</div>
    </div>
  );
};

export default Shine;
