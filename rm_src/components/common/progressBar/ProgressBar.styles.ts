import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #efefef;
  margin: 0;
  position: relative;
`;

export const ProgressFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => `${$percentage}%`};
  background-color: ${colors.secondaryLight};
  transition: width 0.3s ease-in-out;
`;
