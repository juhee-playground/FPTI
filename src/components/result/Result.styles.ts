import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { flexSpaceBetween } from '@/styles/mixins';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 24px 0;
  background-color: ${colors.background};
  color: ${colors.white};
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  gap: 12px;
`;

export const Title = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-weight: 400;
  color: ${colors.text.basic};
  margin: 0;
  span {
    &:nth-child(1) {
      width: 160px;
      height: 30px;
      background-color: ${colors.primary};
      border-radius: 18px;
      font-size: 1.25rem;
      border: solid 1px ${colors.border.black};
    }
    &:nth-child(2) {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  ${flexSpaceBetween}
`;

export const Button = styled.button`
  background-color: ${colors.secondaryLight};
  color: ${colors.white};
  padding: 1rem 1.6rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondaryOpacity};
    color: ${colors.white};
  }
`;
