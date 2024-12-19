import { useCallback } from 'react';

import { useSpring } from '@react-spring/web';

const useMouse = (sensitivity: number) => {
  const quickSettings = { tension: 400, friction: 20 }; // 빠른 반응
  const resetSettings = { tension: 200, friction: 70, delay: 100 }; // 부드러운 초기화

  const [rotateSpring, apiRotate] = useSpring(() => ({
    x: 0,
    y: 0,
    config: quickSettings,
  }));

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      // 감도 조정: 증폭 비율
      const rotateX = (-offsetY / rect.height) * sensitivity;
      const rotateY = (offsetX / rect.width) * sensitivity;

      apiRotate.start({
        x: rotateX,
        y: rotateY,
        config: quickSettings,
      });
    },
    [apiRotate, quickSettings],
  );

  const handleMouseLeave = useCallback(() => {
    // 마우스가 나가면 popover 설정으로 돌아가기
    apiRotate.start({
      x: 0,
      y: 0,
      config: resetSettings,
    });
  }, [apiRotate, resetSettings]);

  return {
    rotateSpring,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useMouse;
