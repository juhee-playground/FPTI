import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { TextNoneDrag } from '@/styles/mixins';

export const QuestionContainer = styled.div<{ $backgroundImage: string }>`
  /* padding: 2.4rem; */
  width: 100%; /* 컨테이너 너비 */
  height: 100%; /* 컨테이너 높이 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* iOS에서 부드러운 스크롤 */
`;

export const QuestionBox = styled.div`
  color: white;
  border: 2px solid white;
  padding: 1.5rem;
  text-align: center;
  margin: 1.5rem;
`;

export const QuestionText = styled.h3`
  ${TextNoneDrag}
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  margin: 1rem;
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
  margin: 0 1.5rem;
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

export const WarningText = styled.div`
  color: red;
  font-size: 14px;
`;

export const ButtonContainer = styled.div<{ $isSingleButton: boolean }>`
  display: flex;
  justify-content: ${({ $isSingleButton }) => ($isSingleButton ? 'flex-end' : 'space-between')};
  margin-top: 20px;
`;
