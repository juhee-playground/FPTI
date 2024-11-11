import { useState } from 'react';

import { adjust } from '@/utils/math';

export default function useMouse() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [positionPercent, setPositionPercent] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [background, setBackground] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = clientX - centerX;
    const offsetY = clientY - centerY;

    const leftX = clientX - left;
    const topX = clientY - top;

    const rotateX = offsetY / 8; // Adjust sensitivity
    const rotateY = -offsetX / 5;

    const leftPercent = ((clientX - left) / width) * 100;
    const topPercent = ((clientY - top) / height) * 100;

    setPosition({ x: leftX, y: topX });
    setRotation({ x: rotateX, y: rotateY });
    setPositionPercent({ x: leftPercent, y: topPercent });
    setBackground({ x: adjust(leftPercent, 0, 100, 37, 63), y: adjust(topPercent, 0, 100, 33, 67) });
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
    setPositionPercent({ x: 25, y: 10 });
    setBackground({ x: 50, y: 50 });
  };

  const dynamicStyles = {
    '--pointer-x': `${positionPercent.x}%`,
    '--pointer-y': `${positionPercent.y}%`,
    '--rotate-x': `${rotation.x}deg`,
    '--rotate-y': `${rotation.y}deg`,
    '--background-x': `${background.x}%`,
    '--background-y': `${background.y}%`,
  };

  return { rotation, position, positionPercent, handleMouseMove, handleMouseLeave, dynamicStyles };
}
