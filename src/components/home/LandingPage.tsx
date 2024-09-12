import { useNavigate } from 'react-router-dom';

import { Wrapper, Overlay, Title, Subtitle } from './LandingPage.styles';

import { DefaultButton } from '@/components/common/button/Button.styles';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = (): void => {
    navigate('/quiz');
  };

  return (
    <Wrapper>
      <Overlay>
        <Title>FPTI: 풋살 MBTI</Title>
        <Subtitle>풋살스타일로 알아보는 나의 풋살 성향은??</Subtitle>
        <DefaultButton onClick={handleStart}>START</DefaultButton>
      </Overlay>
    </Wrapper>
  );
};

export default LandingPage;
