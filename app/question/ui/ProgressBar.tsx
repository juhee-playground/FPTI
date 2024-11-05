import React from 'react';

interface IProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: IProgressBarProps) => (
  <div className='w-full h-2 bg-gray-200 relative'>
    <div className='h-full bg-orange-300 transition-all duration-300 ease-in-out' style={{ width: `${percentage}%` }} />
  </div>
);

export default ProgressBar;
