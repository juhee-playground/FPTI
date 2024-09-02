import styled from 'styled-components';

import { colors } from '@/styles/colors';

// 진행도 바 스타일
export const ProgressBar = styled.div`
  width: calc(100% - 6px);
  height: 8px;
  background-color: #efefef;
  margin: 0 3px;
  position: relative;
`;

export const ProgressFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${colors.secondaryLight};
  transition: width 0.3s ease-in-out;
`;
