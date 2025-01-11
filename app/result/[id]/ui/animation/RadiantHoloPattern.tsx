'use client';
import React from 'react';

import styles from '@/app/result/[id]/ui/animation/RadiantHoloPattern.module.css';
import useInteract from '@/hooks/useInteract';

interface IRotatorProps {
  children: React.ReactNode;
  dynamicStylesProps?: React.CSSProperties;
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
}: IRotatorProps) => {
  const { handleMove, handleLeave, dynamicStyles, interacting } = useInteract();
  if (!process.env.NEXT_PUBLIC_IMAGE_URL) {
    throw new Error('NEXT_PUBLIC_IMAGE_URL is not defined!');
  }
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL.replace(/^"|"$/g, '');
  const foilCardPath = `${imageUrl}/image-fpti/${fpti}_holo.webp`;
  const appliedStyles = dynamicStylesProps || dynamicStyles;

  return (
    <div
      className={styles.container}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={appliedStyles as React.CSSProperties}
    >
      {interacting ? (
        <React.Fragment>
          {radiant && <div className={styles.radiant} />}
          {holo && (
            <div
              className={`${styles.radiant} ${styles['radiant--holo']}`}
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
