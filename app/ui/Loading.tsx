const LoadingDots = () => {
  return (
    <div className='flex items-center justify-center space-x-2'>
      <span className='w-6 h-6 bg-secondary rounded-full animate-dotPulse delay-0'></span>
      <span className='w-6 h-6 bg-secondary rounded-full animate-dotPulse delay-200'></span>
      <span className='w-6 h-6 bg-secondary rounded-full animate-dotPulse delay-400'></span>
    </div>
  );
};

export default LoadingDots;
