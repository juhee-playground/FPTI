import React from 'react';

const CardBack = () => {
  return (
    <div className='flex items-center justify-center max-w-80'>
      <img
        width={320}
        height={481}
        src='/bg-back.png'
        alt='카드 뒷면'
        className='border border-text-placeholder rounded-xl'
      />
    </div>
  );
};

export default CardBack;
