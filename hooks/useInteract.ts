import { useState, useCallback } from 'react';

import { clamp } from '@/utils/math';

// 데이터 타입 정의
type Position = { x: number; y: number };
type Rotation = { x: number; y: number };

const useInteract = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
  const [transition, setTransition] = useState(''); // 애니메이션 전환 속성
  const [interacting, setInteracting] = useState(false);
  const [positionPercent, setPositionPercent] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [background, setBackground] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (e.type === 'touchmove') {
      e.preventDefault();
      const touch = (e as React.TouchEvent).touches[0];
      processInteraction(touch.clientX, touch.clientY, e.currentTarget);
    } else if (e.type === 'mousemove') {
      const mouseEvent = e as React.MouseEvent;
      processInteraction(mouseEvent.clientX, mouseEvent.clientY, e.currentTarget);
    }
  }, []);

  const processInteraction = (clientX: number, clientY: number, target: HTMLDivElement) => {
    const { left, top, width, height } = target.getBoundingClientRect();
    const offsetX = clientX - (left + width / 2);
    const offsetY = clientY - (top + height / 2);

    const rotateX = offsetY / 8;
    const rotateY = -offsetX / 5;

    const leftPercent = ((clientX - left) / width) * 100;
    const topPercent = ((clientY - top) / height) * 100;

    setPosition({ x: leftPercent, y: topPercent });
    setRotation({ x: rotateX, y: rotateY });
    setTransition('');
    setPositionPercent({ x: leftPercent, y: topPercent });
    setBackground({ x: clamp(leftPercent, 0, 100), y: clamp(topPercent, 0, 100) });
    setInteracting(true);
  };

  const handleLeave = useCallback(() => {
    setTransition('transform 2s ease');
    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
    setInteracting(false);
  }, []);

  const dynamicStyles = {
    '--pointer-x': `${positionPercent.x}%`,
    '--pointer-y': `${positionPercent.y}%`,
    '--pointer-from-center': clamp(
      Math.sqrt((position.y - 50) * (position.y - 50) + (position.x - 50) * (position.x - 50)) / 50,
      0,
      1,
    ),
    '--pointer-from-top': position.y / 1000,
    '--pointer-from-left': position.x / 1000,
    '--card-opacity': interacting ? 1 : 0,
    '--rotate-x': `${rotation.x}deg`,
    '--rotate-y': `${rotation.y}deg`,
    '--background-x': `${background.x}%`,
    '--background-y': `${background.y}%`,
    width: '320px',
    height: '491px',
  };

  return {
    position,
    rotation,
    transition,
    interacting,
    handleMove,
    handleLeave,
    dynamicStyles,
  };
};

export default useInteract;
