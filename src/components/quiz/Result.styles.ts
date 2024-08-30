import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  background-color: #4ac390;
  color: ${colors.white};
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
