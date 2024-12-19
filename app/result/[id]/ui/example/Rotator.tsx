import React, { CSSProperties } from 'react';

import { animated, Interpolation } from '@react-spring/web';

import useMouse from '../../../../../hooks/useMouse';
import './PokemonCard.css';

interface IRotatorProps extends React.ComponentPropsWithoutRef<'div'> {
  sensitivity?: number; // 감도를 조정할 수 있는 옵션
}

interface ICustomCSSProperties extends CSSProperties {
  '--rotate-x'?: string | Interpolation<number>;
  '--rotate-y'?: string | Interpolation<number>;
  '--pointer-x'?: string | Interpolation<number>;
  '--pointer-y'?: string | Interpolation<number>;
  '--pointer-opacity'?: number | Interpolation<number>;
  '--background-x'?: string | Interpolation<number>;
  '--background-y'?: string | Interpolation<number>;
  '--card-scale'?: number | string | Interpolation<number>;
}

const Rotator: React.FC<IRotatorProps> = ({ sensitivity = 50, style, children, ...rest }) => {
  const { rotateSpring, glareSpring, handleMouseMove, handleMouseLeave } = useMouse(sensitivity);
  return (
    <animated.div
      {...rest}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          ...style,
          '--rotate-x': rotateSpring.x.to(x => `${x}deg`),
          '--rotate-y': rotateSpring.y.to(y => `${y}deg`),
          '--pointer-x': glareSpring.x.to(x => `${x}%`),
          '--pointer-y': glareSpring.y.to(y => `${y}%`),
          '--card-opacity': glareSpring.o,
        } as ICustomCSSProperties
      }
    >
      <div
        className='shine'
        style={
          {
            '--pointer-x': `${glareSpring.x.get()}%`, // 숫자로 전달
            '--pointer-y': `${glareSpring.y.get()}%`, // 숫자로 전달
          } as ICustomCSSProperties
        }
      ></div>
      {children}
    </animated.div>
  );
};

export default Rotator;
