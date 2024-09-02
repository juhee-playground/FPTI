import { useEffect, useState } from 'react';

import {
  QuestionContainer,
  QuestionBox,
  QuestionText,
  SelectContainer,
  TextContainer,
  OptionText,
  Button,
} from './Question.styles';

import backgroundImg from '@/assets/bg_field.png';
import Progress from '@/components/common/progressBar';
import CircleSelector from '@/components/quiz/CircleSelector';

interface IQuestionProps {
  percentage: number;
  questionId: number;
  questionText: string;
  options: { type: string; text: string }[];
  scale: { min: string; max: string };
  onAnswer: (questionId: number, scaleValue: IScaleValue) => void;
}

const Question = ({ percentage, questionId, questionText, scale, options, onAnswer }: IQuestionProps) => {
  const [currentSelectedValue, setCurrentSelectedValue] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setCurrentSelectedValue(value);
  };

  const handleSubmit = () => {
    if (currentSelectedValue !== null) {
      const scaleValue = {
        [scale.min]: 100 - currentSelectedValue,
        [scale.max]: currentSelectedValue,
      };
      onAnswer(questionId, scaleValue);
    } else {
      console.log('Please select a value before submitting.');
      // 선택하지 않았을 때 사용자에게 알림
    }
  };

  useEffect(() => {
    // 질문이 바뀔 때마다 selectedValue를 초기화
    setCurrentSelectedValue(null);
  }, [questionId]);

  return (
    <QuestionContainer $backgroundImage={backgroundImg}>
      <Progress percentage={percentage} />
      <QuestionBox>
        <QuestionText>{questionText}</QuestionText>
      </QuestionBox>
      <SelectContainer>
        <CircleSelector selectedValue={currentSelectedValue} onSelect={handleSelect} />
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
