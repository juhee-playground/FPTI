import React from 'react';

const CardBack = () => {
  return (
    <div className='flex items-center justify-center'>
      <img
        width={345.59}
        height={491}
        src='/bg-back.png'
        alt='카드 뒷면'
        className='border border-text-placeholder rounded-xl'
      />
    </div>
  );
};

export default CardBack;
