import { useEffect, useState } from 'react';

import {
  QuestionContainer,
  QuestionBox,
  QuestionText,
  SelectContainer,
  TextContainer,
  OptionText,
  WarningText,
} from './Question.styles';

import backgroundImg from '@/assets/bg_field.png';
import Button from '@/components/common/button';
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
  const [showWarning, setShowWarning] = useState(false);
  const isNotSelected = currentSelectedValue === null;

  const handleSelect = (value: number) => {
    setCurrentSelectedValue(value);
    setShowWarning(false);
  };

  const handleSubmit = () => {
    if (!isNotSelected) {
      const scaleValue = {
        [scale.min]: 100 - currentSelectedValue,
        [scale.max]: currentSelectedValue,
      };
      onAnswer(questionId, scaleValue);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  useEffect(() => {
    setCurrentSelectedValue(null);
    setShowWarning(false);
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
      {showWarning && <WarningText>값을 선택해 주세요!</WarningText>} {/* 경고 메시지 추가 */}
      <Button disabled={isNotSelected} onClick={handleSubmit}>
        다음
      </Button>
    </QuestionContainer>
  );
};

export default Question;
