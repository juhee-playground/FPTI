import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  gap: 16px;
`;

export const Circle = styled.div<{ $size: number; $selected: boolean }>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background-color: ${props => (props.$selected ? 'transparent' : colors.button.basic)};
  border-radius: 50%;
  border: solid 1px ${colors.border.black};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.primary};
  }
`;

export const BallImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${colors.white};
`;
