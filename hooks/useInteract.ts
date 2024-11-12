import { useState, useCallback } from 'react';

// 데이터 타입 정의
type Position = { x: number; y: number };
type Rotation = { x: number; y: number };

const useInteract = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
  const [interacting, setInteracting] = useState(false);

  // 터치 및 마우스 이벤트 처리 함수
  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (e.type === 'touchmove') {
      e.preventDefault(); // 터치 이벤트 기본 동작 방지
      const touch = (e as React.TouchEvent).touches[0];
      const clientX = touch.clientX;
      const clientY = touch.clientY;
      processInteraction(clientX, clientY, e.currentTarget);
    } else if (e.type === 'mousemove') {
      const clientX = (e as React.MouseEvent).clientX;
      const clientY = (e as React.MouseEvent).clientY;
      processInteraction(clientX, clientY, e.currentTarget);
    }
  }, []);

  // 마우스 및 터치 이벤트로 위치와 회전값 계산
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
    setInteracting(true);
  };

  // 마우스가 카드 밖으로 나갔을 때 처리
  const handleLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
    setInteracting(false);
  }, []);

  return {
    position,
    rotation,
    interacting,
    handleMove,
    handleLeave,
  };
};

export default useInteract;
