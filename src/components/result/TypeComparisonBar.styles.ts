import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { getColorByType } from '@/utils/color';

const CHAR_WIDTH = 3;

export const TypeComparisonBarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BarWrapper = styled.div<{ $isReverse: boolean }>`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin-bottom: 8px;
  display: flex;
  flex-direction: ${({ $isReverse }) => ($isReverse ? 'row-reverse' : 'row')};
`;

export const Progress = styled.div<{ $percentage: number; $type: string; $isReverse: boolean }>`
  width: ${({ $percentage }) => `${$percentage}%`};
  background-color: ${({ $type }) => getColorByType($type)};
  height: 100%;
  transition: width 0.3s ease;
  justify-content: ${({ $isReverse }) => ($isReverse ? 'flex-start' : 'flex-end')};
`;

export const PercentageText = styled.span<{ $isMain: boolean; $percentage: number; $isReverse: boolean }>`
  font-size: ${({ $isMain }) => ($isMain ? '0.875rem' : '0.8125rem')};
  font-weight: ${({ $isMain }) => ($isMain ? 'bold' : 'normal')};
  color: ${({ $isMain }) => ($isMain ? colors.black : colors.border.darken)};
  position: absolute;
  right: ${({ $isReverse, $percentage }) => {
    const text = `${Math.ceil($percentage)}%`;
    const textWidth = text.length * CHAR_WIDTH;
    const x = $percentage - textWidth;
    return $isReverse ? `${x}%` : `${100 - x}%`;
  }};
  top: 50%;
  transform: translateX(50%) translateY(-50%);
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TypeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36%;
`;

export const TypeLabel = styled.h2<{ $isMain: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 0.8125rem;
  color: ${({ $isMain }) => ($isMain ? colors.white : colors.black)};
`;

export const TypeDescription = styled.p<{ $isMain: boolean }>`
  font-size: 0.75rem;
  font-weight: ${({ $isMain }) => ($isMain ? 'bold' : 'normal')};
  color: #000;
`;
