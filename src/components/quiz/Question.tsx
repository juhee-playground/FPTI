import {
  QuestionContainer,
  QuestionBox,
  QuestionText,
  SelectContainer,
  TextContainer,
  OptionText,
  Button,
} from './Question.styles';

import backgroundImg from '@/assets/bg-soccer-field.png';
import CircleSelector from '@/components/quiz/CircleSelector';
import { useState } from 'react';

interface IQuestionProps {
  questionText: string;
  options: { type: string; text: string }[];
  scale: { min: string; max: string };
  onAnswer: (scaleValue: { [key: string]: number }) => void;
}

const Question = ({ questionText, scale, options, onAnswer }: IQuestionProps) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(); // 초기 값은 중앙

  const handleSelect = (value: number) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    if (selectedValue)
      const scaleValue = {
        [scale.min]: 100 - selectedValue,
        [scale.max]: selectedValue,
      };
    onAnswer(scaleValue);
  };

  return (
    <QuestionContainer $backgroundImage={backgroundImg}>
      <QuestionBox>
        <QuestionText>{questionText}</QuestionText>
      </QuestionBox>
      <SelectContainer>
        <CircleSelector onSelect={handleSelect} />
        <TextContainer>
          <OptionText>{options[0].text}</OptionText>
          <OptionText>{options[1].text}</OptionText>
        </TextContainer>
      </SelectContainer>
      <Button onClick={handleSubmit}>다음</Button>
    </QuestionContainer>
  );
};

export default Question;
