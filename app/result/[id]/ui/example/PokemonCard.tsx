import React from 'react';

import CardFront from '../CardFront';
import Rotator from './Rotator';
import './PokemonCard.css';

import { RESULT_EXAMPLE } from '@/constants/Example';

const PokemonCard = () => {
  const cardInfo = { fpti: 'SAPE', type: '리더형', result: RESULT_EXAMPLE };

  return (
    <Rotator className='pcard-container'>
      <div className='pcard'>
        <div className='pcard__front'>
          <CardFront fpti={cardInfo.fpti} type={cardInfo.type} result={cardInfo.result} />
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
