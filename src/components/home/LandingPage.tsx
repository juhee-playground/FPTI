import { useNavigate } from 'react-router-dom';

import landingBg from '@/assets/landing-bg.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = (): void => {
    navigate('/quiz'); // 퀴즈 페이지로 이동
  };

  return (
    <div
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${landingBg})`, height: '100%' }}
    >
      {/* 오버레이 */}
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-white mb-6'>Welcome to FPTI</h1>
        <p className='text-lg text-gray-200 mb-8 text-center px-4'>
          Discover your Futsal Personality Type and improve your game!
        </p>
        <button
          onClick={handleStart}
          className='bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-500 transition duration-300'
        >
          Start the Test
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
