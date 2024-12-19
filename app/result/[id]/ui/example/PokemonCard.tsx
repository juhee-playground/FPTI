import React from 'react';

import CardFront from '../CardFront';
import Rotator from './Rotator';
import './PokemonCard.css';

const PokemonCard = () => {
  const fpti = 'SAPE';
  const type = '리더형';
  const result = {
    '책임감과 주도성': {
      L: 57,
      S: 43,
    },
    '팀에서의 역할': {
      A: 100,
      D: 0,
    },
    '플레이 스타일': {
      T: 52,
      P: 48,
    },
    '목표와 우선순위': {
      C: 40,
      E: 60,
    },
  };
  return (
    <Rotator className='pcard-container' sensitivity={50}>
      <div className='pcard'>
        <div className='pcard__front'>
          <CardFront fpti={fpti} type={type} result={result} />
        </div>
        <div className='pcard__back'>
          <img
            width={320}
            height={491}
            src='/bg-back.png'
            alt='카드 뒷면'
            className='border border-text-placeholder rounded-xl'
          />
        </div>
      </div>
    </Rotator>
  );
};

export default PokemonCard;
