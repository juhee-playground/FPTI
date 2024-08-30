import styled from 'styled-components';

import { colors } from '@/styles/colors';

const CHAR_WIDTH = 3;

export const PercentageBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Label = styled.span<{ $isStart?: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.white};
  /* color: ${({ $isStart }) => ($isStart ? '#FFFFFF' : '#000000')}; */
  margin: 0 8px;
`;

export const PercentageWrapper = styled.div<{ $isReverse: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  height: 20px;
  position: relative;
  flex-direction: ${({ $isReverse }) => ($isReverse ? 'row-reverse' : 'row')}; /* 방향 설정 */
`;

export const Progress = styled.div<{ $percentage: number; $type: string; $isReverse: boolean }>`
  width: ${({ $percentage }) => `${$percentage}%`};
  background-color: ${({ $type }) => getColorByType($type)};
  height: 100%;
  justify-content: ${({ $isReverse }) => ($isReverse ? 'flex-start' : 'flex-end')};
  transition: width 0.3s ease;
`;

// 타입별 색상을 반환하는 함수
const getColorByType = (type: string) => {
  const typeColors: { [key: string]: string } = {
    A: '#A1C6EA', // 부드러운 파란색
    G: '#FFD1BA', // 파스텔 오렌지
    L: '#F7D6E0', // 연한 핑크색
    S: '#C8E6C9', // 연한 녹색
    D: '#D3C2E6', // 라벤더색
    P: '#FFE1A8', // 밝은 황토색
    C: '#B2DFDB', // 파스텔 민트
    E: '#FFECB3', // 밝은 레몬색
  };

  return typeColors[type] || colors.black; // 기본값은 검정색
};

export const PercentageText = styled.span<{ $percentage: number; $isReverse: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.black};
  position: absolute;
  right: ${({ $isReverse, $percentage }) => {
    const text = `${parseFloat($percentage.toFixed(2))}%`;
    const textWidth = text.length * CHAR_WIDTH;
    const x = $percentage - textWidth;
    return $isReverse ? `${x}%` : `${100 - x}%`;
  }};
  top: 50%;
  transform: translateX(50%) translateY(-50%);
`;
