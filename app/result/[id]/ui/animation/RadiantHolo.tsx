import React from 'react';

// import Glare from '@/app/result/[id]/components/Glare';
import Holo from '@/app/result/[id]/ui/animation/Holo';
import Radiant from '@/app/result/[id]/ui/animation/Radiant';
import styles from '@/app/result/[id]/ui/animation/RadiantHolo.module.css';
// import Shine from '@/app/result/[id]/ui/animation/Shine';
import useInteract from '@/hooks/useInteract';

interface RadiantHoloProps {
  children?: React.ReactNode;
  dynamicStylesProps?: React.CSSProperties;
  radiant: boolean;
  holo: boolean;
}

const RadiantHolo: React.FC<RadiantHoloProps> = ({ children, dynamicStylesProps, radiant, holo }) => {
  const { handleMove, handleLeave, dynamicStyles } = useInteract();
  const appliedStyles = dynamicStylesProps || (dynamicStyles as React.CSSProperties);

  let wrappedChildren = <>{children}</>;

  if (holo) {
    wrappedChildren = <Holo>{wrappedChildren}</Holo>;
  }

  if (radiant) {
    wrappedChildren = <Radiant dynamicStylesProps={appliedStyles}>{wrappedChildren}</Radiant>;
  }

  return (
    <div className={styles.container} onMouseMove={handleMove} onTouchMove={handleMove} onMouseLeave={handleLeave}>
      {wrappedChildren}
    </div>
  );
};

export default RadiantHolo;
