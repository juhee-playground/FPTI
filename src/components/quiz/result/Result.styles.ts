import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 1.25rem;
  background-color: #4ac390;
  color: ${colors.white};

  overflow-y: auto; /* 세로 스크롤을 활성화 */
  max-height: 100vh; /* 화면 높이의 80%로 최대 높이 설정 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
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
