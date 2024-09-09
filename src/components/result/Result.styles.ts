import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { flexSpaceBetween } from '@/styles/mixins';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1.25rem;
  background-color: ${colors.background};
  color: ${colors.white};
  overflow-y: auto;
  max-height: calc(100vh - 92px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  gap: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  span {
    &:nth-child(1) {
      color: ${colors.black};
    }
    &:nth-child(2) {
      color: ${colors.white};
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
