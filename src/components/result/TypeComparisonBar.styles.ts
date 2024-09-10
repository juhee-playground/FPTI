import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { getColorByType } from '@/utils/color';

const CHAR_WIDTH = 3;

export const TypeComparisonBarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const BarWrapper = styled.div<{ $isReverse: boolean }>`
  display: flex;
  flex-direction: ${({ $isReverse }) => ($isReverse ? 'row-reverse' : 'row')};
  text-align: ${({ $isReverse }) => ($isReverse ? 'right' : 'left')};
  width: 100%;
  height: 24px;
  background-color: #57a17a;
  border-radius: 12px;
`;

export const Progress = styled.div<{ $percentage: number; $type: string; $isReverse: boolean }>`
  width: ${({ $percentage }) => `${$percentage}%`};
  height: 100%;
  display: flex;
  padding: 12px;
  justify-content: ${({ $isReverse }) => ($isReverse ? 'flex-start' : 'flex-end')};
  align-items: center;
  background-color: ${({ $type }) => getColorByType($type)};
  border-radius: 12px;
  border: solid 1px ${colors.border.black};
  transition: width 0.3s ease;
`;

export const PercentageText = styled.span<{ $isMain: boolean; $percentage: number; $isReverse: boolean }>`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.border.black};
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84px;
  gap: 3px;
`;

export const TypeLabel = styled.h2<{ $isMain: boolean; $type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: solid 1px ${colors.border.black};
  font-size: 0.875rem;
  color: ${colors.text.basic};
  background-color: ${({ $isMain, $type }) => ($isMain ? getColorByType($type) : 'inherit')};
`;
export const TypeDescription = styled.p`
  font-size: 0.75rem;
  font-weight: normal;
  color: ${colors.text.basic};
`;
