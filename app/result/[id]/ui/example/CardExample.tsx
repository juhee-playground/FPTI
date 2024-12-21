import React, { useState, useRef, MouseEvent } from 'react';

import { useSpring, animated, Interpolation } from '@react-spring/web';

import { clamp, round, adjust } from '../../../../../utils/math';

interface CustomCSSProperties extends React.CSSProperties {
  '--rotate-x'?: string | Interpolation<number>;
  '--rotate-y'?: string | Interpolation<number>;
  '--pointer-x'?: string | Interpolation<number>;
  '--pointer-y'?: string | Interpolation<number>;
  '--pointer-opacity'?: number | Interpolation<number>;
  '--background-x'?: string | Interpolation<number>;
  '--background-y'?: string | Interpolation<number>;
  '--card-scale'?: number | string | Interpolation<number>;
  '--seedx'?: number;
  '--seedy'?: number;
  '--cosmosbg'?: string;
  '--mask'?: string;
  '--foil'?: string;
}

interface PokemonCardProps {
  id?: string; // 카드 ID
  name?: string; // 카드 이름
  number?: string; // 카드 번호
  set?: string; // 카드 세트
  types?: string; // 카드 타입 (예: 물, 불 등)
  subtypes?: string; // 카드 하위 타입 (기본값: 'basic')
  supertype?: string; // 카드 상위 타입 (기본값: 'pokémon')
  rarity?: string; // 카드 희귀도 (기본값: 'common')
  img?: string; // 카드 이미지 URL
  back?: string; // 카드 뒷면 이미지 URL (기본값 제공)
  foil?: string; // 카드 호일 이미지 URL
  mask?: string; // 카드 마스크 URL
  showcase?: boolean; // 쇼케이스 모드 활성화 여부
}

const PokemonCardExample = ({
  id = '',
  name = '',
  number = '',
  set = '',
  types = '',
  subtypes = 'basic',
  supertype = 'pokémon',
  rarity = 'common',
  img = '',
  back = 'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg',
  foil = '',
  mask = '',
  showcase = false,
}: PokemonCardProps) => {
  const randomSeed = { x: Math.random(), y: Math.random() };
  const cosmosPosition = {
    x: Math.floor(randomSeed.x * 734),
    y: Math.floor(randomSeed.y * 1280),
  };

  const [interacting, setInteracting] = useState(false);
  const [loading, setLoading] = useState(true);
  const thisCardRef = useRef<HTMLDivElement | null>(null); // Add proper ref type

  const [rotateSpring, apiRotate] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 200, friction: 20 },
  }));

  const [glareSpring, apiGlare] = useSpring(() => ({
    x: 50,
    y: 50,
    o: 0,
    config: { tension: 200, friction: 20 },
  }));

  const [backgroundSpring, apiBackground] = useSpring(() => ({
    x: 50,
    y: 50,
    config: { tension: 200, friction: 20 },
  }));

  const [scaleSpring, apiScale] = useSpring(() => ({
    scale: 1,
    config: { tension: 150, friction: 15 },
  }));

  const handleInteract = (e: MouseEvent<HTMLDivElement>) => {
    if (!thisCardRef.current) return;

    const rect = thisCardRef.current.getBoundingClientRect();
    const absolute = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    const percent = {
      x: clamp(round((100 / rect.width) * absolute.x)),
      y: clamp(round((100 / rect.height) * absolute.y)),
    };
    const center = {
      x: percent.x - 50,
      y: percent.y - 50,
    };

    setInteracting(true);

    apiRotate.start({
      x: round(-(center.x / 3.5)),
      y: round(center.y / 2),
    });

    apiGlare.start({
      x: round(percent.x),
      y: round(percent.y),
      o: 1,
    });

    apiBackground.start({
      x: adjust(percent.x, 0, 100, 37, 63),
      y: adjust(percent.y, 0, 100, 33, 67),
    });
  };

  const handleInteractEnd = () => {
    setInteracting(false);

    apiRotate.start({ x: 0, y: 0 });
    apiGlare.start({ x: 50, y: 50, o: 0 });
    apiBackground.start({ x: 50, y: 50 });
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const style: CustomCSSProperties = {
    '--rotate-x': rotateSpring.x.to(x => `${x}deg`),
    '--rotate-y': rotateSpring.y.to(y => `${y}deg`),
    '--pointer-x': glareSpring.x.to(x => `${x}%`),
    '--pointer-y': glareSpring.y.to(y => `${y}%`),
    '--pointer-opacity': glareSpring.o.to(o => o),
    '--background-x': backgroundSpring.x.to(x => `${x}%`),
    '--background-y': backgroundSpring.y.to(y => `${y}%`),
    '--card-scale': scaleSpring.scale,
  };

  return (
    <animated.div
      className={`card2 ${types} interactive ${loading ? 'loading' : ''}`}
      ref={thisCardRef}
      style={style}
      onMouseMove={handleInteract}
      onMouseOut={handleInteractEnd}
    >
      <div className='card__translater'>
        <button className='card__rotator' aria-label={`Expand the Pokemon Card; ${name}.`}>
          <img
            className='card__back'
            src={back}
            alt='The back of a Pokemon Card'
            loading='lazy'
            width='660'
            height='921'
          />
          <div
            className='card__front'
            style={{
              '--seedx': randomSeed.x,
              '--seedy': randomSeed.y,
              '--cosmosbg': `${cosmosPosition.x}px ${cosmosPosition.y}px`,
              ...(mask || foil ? { '--mask': `url(${mask})`, '--foil': `url(${foil})` } : {}),
            }}
          >
            <img
              src={img}
              alt={`Front design of the ${name} Pokemon Card`}
              onLoad={handleImageLoad}
              loading='lazy'
              width='660'
              height='921'
            />
            <div className='card__shine'></div>
            <div className='card__glare'></div>
          </div>
        </button>
      </div>
    </animated.div>
  );
};

export default PokemonCardExample;
