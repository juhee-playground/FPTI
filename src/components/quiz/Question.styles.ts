import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const QuestionContainer = styled.div<{ $backgroundImage: string }>`
  padding: 2.8rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px; /* 배경 이미지가 네모나지 않도록 둥글게 */
  color: ${colors.white}; /* 텍스트 색상을 흰색으로 설정하여 가독성 향상 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자를 추가해 입체감 부여 */
`;

export const QuestionText = styled.h3`
  font-size: 1.25rem; /* text-lg */
  font-weight: bold;
  margin-bottom: 1rem; /* mb-4 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: inherit;
  border: solid 3px ${colors.white};
  color: ${colors.white};
  padding: 1rem 1.6rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;
