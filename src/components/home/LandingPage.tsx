import { useNavigate } from 'react-router-dom';

import { Wrapper, Overlay, Title, Subtitle, StartButton } from './LandingPage.styles';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = (): void => {
    navigate('/quiz'); // 퀴즈 페이지로 이동
  };

  return (
    <Wrapper>
      <Overlay>
        <Title>FPTI: 풋살 엠비티아이</Title>
        <Subtitle>풋살 스타일로 나의 풋살 성향은?</Subtitle>
        <StartButton onClick={handleStart}>START</StartButton>
      </Overlay>
    </Wrapper>
  );
};

export default LandingPage;
