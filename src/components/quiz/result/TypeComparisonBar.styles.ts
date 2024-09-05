import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { getColorByType } from '@/utils/color';

const CHAR_WIDTH = 3;

export const TypeComparisonBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MainLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
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
  font-weight: bold;
  color: ${colors.black};
  font-size: ${({ $isMain }) => ($isMain ? '1rem' : '0.8125rem')};
  font-weight: ${({ $isMain }) => ($isMain ? 'bold' : 'normal')};
  color: ${({ $isMain }) => ($isMain ? colors.black : colors.border.darken)};
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

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Label = styled.span<{ $isMain?: boolean }>`
  font-size: 1rem;
  font-weight: ${({ $isMain }) => ($isMain ? 'bold' : 'normal')};
  color: ${({ $isMain }) => ($isMain ? colors.white : colors.black)};
`;
