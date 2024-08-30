import styled from 'styled-components';

import landingBg from '@/assets/landing-bg.png';
import { colors } from '@/styles/colors';

// Wrapper: 전체 화면을 차지하는 컨테이너
export const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${landingBg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

// Overlay: 텍스트와 버튼을 중앙에 배치하는 오버레이
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Title: 랜딩 페이지의 주요 제목
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
`;

// Subtitle: 부제목 스타일
export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

// StartButton: 시작 버튼 스타일
export const StartButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;
