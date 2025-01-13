'use client';
import React from 'react';

import '@/app/result/[id]/ui/animation/RadiantHoloPattern.css';
import useInteract from '@/hooks/useInteract';

interface IRotatorProps {
  children: React.ReactNode;
  dynamicStylesProps?: React.CSSProperties;
  isFlipped: boolean;
  radiant: boolean;
  holo: boolean;
  fpti: string;
}

const RadiantHoloPattern = ({
  children,
  dynamicStylesProps,
  fpti = 'SAPE',
  radiant = true,
  holo = false,
  isFlipped,
}: IRotatorProps) => {
  const { handleMove, handleLeave, dynamicStyles, interacting, isMobile } = useInteract();
  if (!process.env.NEXT_PUBLIC_IMAGE_URL) {
    throw new Error('NEXT_PUBLIC_IMAGE_URL is not defined!');
  }
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL.replace(/^"|"$/g, '');
  const foilCardPath = `${imageUrl}/image-fpti/${fpti}_holo.webp`;
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className='radinat-container'
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      {(interacting || isMobile) && !isFlipped ? (
        <React.Fragment>
          {radiant && <div className='radiant' />}
          {holo && (
            <div
              className='radiant radiant--holo'
              style={
                {
                  '--dynamic-background': `url(${foilCardPath})`,
                } as React.CSSProperties
              }
            />
          )}
        </React.Fragment>
      ) : null}

      {children}
    </div>
  );
};

export default RadiantHoloPattern;
