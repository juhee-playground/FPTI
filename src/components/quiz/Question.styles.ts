import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { TextNoneDrag } from '@/styles/mixins';

export const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.background};
  color: ${colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* iOS에서 부드러운 스크롤 */
`;

export const QuestionBox = styled.div`
  padding: 1.5rem;
  margin: 1.5rem;
  background-color: ${colors.primary};
  color: ${colors.text.basic};
  border: 2px solid ${colors.border.black};
  border-radius: 20px;
  text-align: center;
`;

export const QuestionText = styled.h3`
  ${TextNoneDrag}
  font-size: 1.5rem;
  font-weight: 400;
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
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const OptionText = styled.h4`
  ${TextNoneDrag}
  padding: .75rem;
  color: ${colors.text.basic};
  font-size: 1.125rem;
  font-weight: 400;
  max-width: 120px;
  min-height: 100px;
  vertical-align: middle;
  text-align: left;

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
  margin: 20px;
`;
