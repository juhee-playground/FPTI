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

  const [glareSpring, apiGlare] = useSpring(() => ({
    x: 50,
    y: 50,
    o: 0,
    config: quickSettings,
  }));

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-offsetY / rect.height) * sensitivity;
      const rotateY = (offsetX / rect.width) * sensitivity;

      const pointerX = ((e.clientX - rect.left) / rect.width) * 100;
      const pointerY = ((e.clientY - rect.top) / rect.height) * 100;

      apiRotate.start({
        x: rotateX,
        y: rotateY,
        config: quickSettings,
      });

      console.log('????', pointerX, pointerY);

      apiGlare.start({
        x: pointerX,
        y: pointerY,
        o: 1,
      });
    },
    [apiRotate, apiGlare, quickSettings],
  );

  const handleMouseLeave = useCallback(() => {
    apiRotate.start({
      x: 0,
      y: 0,
      config: resetSettings,
    });
    apiGlare.start({ x: 50, y: 50, o: 0, config: resetSettings });
  }, [apiRotate, apiGlare, resetSettings]);

  return {
    rotateSpring,
    glareSpring,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useMouse;
