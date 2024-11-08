import React from 'react';

interface IProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: IProgressBarProps) => (
  <div className='w-full h-2 bg-border-basic relative'>
    <div
      className='h-full bg-secondary-light transition-all duration-300 ease-in-out'
      style={{ width: `${percentage}%` }}
    />
  </div>
);

export default ProgressBar;
