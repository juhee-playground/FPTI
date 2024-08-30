import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { TextNoneDrag } from '@/styles/mixins';

export const QuestionContainer = styled.div<{ $backgroundImage: string }>`
  padding: 2.4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  color: ${colors.white}; /* 텍스트 색상을 흰색으로 설정하여 가독성 향상 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자를 추가해 입체감 부여 */
`;

export const QuestionBox = styled.div`
  color: white;
  border: 2px solid white;
  padding: 1rem;
  text-align: center;
`;

export const QuestionText = styled.h3`
  ${TextNoneDrag}
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: #ffffff80;
  color: ${colors.black};
  padding: 1rem 1.6rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryOpacity};
    color: ${colors.white};
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const OptionText = styled.h4`
  ${TextNoneDrag}
  padding: 0.875rem;
  color: ${colors.white};
  font-size: 1rem;
  max-width: 120px;
  min-height: 100px;
  vertical-align: middle;

  &:first-child {
    text-align: left;
  }
  &:last-child {
    text-align: right;
  }
`;
