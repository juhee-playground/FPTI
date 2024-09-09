import { useEffect, useState } from 'react';

import { QuestionContainer, QuestionBox, SelectContainer, ButtonContainer } from './Question.styles';

import Button from '@/components/common/button';
import Progress from '@/components/common/progressBar';
import OptionSelector from '@/components/quiz/question/OptionSelector';
import QuestionHeader from '@/components/quiz/question/QuestionHeader';

interface IQuestionProps {
  percentage: number;
  questionId: number;
  questionText: string;
  options: { type: string; text: string }[];
  scale: { min: string; max: string };
  isFirstQuestion: boolean;
  selectedValue: IScaleValue | null;
  onPrevious: () => void;
  onAnswer: (questionId: number, scaleValue: IScaleValue) => void;
}

const Question = ({
  percentage,
  questionId,
  questionText,
  scale,
  isFirstQuestion,
  options,
  selectedValue,
  onPrevious,
  onAnswer,
}: IQuestionProps) => {
  const [currentSelectedValue, setCurrentSelectedValue] = useState<number | null>(null);
  const isNotSelected = currentSelectedValue === null;

  const handleSelect = (value: number) => {
    setCurrentSelectedValue(value);
  };

  const handleSubmit = () => {
    if (!isNotSelected) {
      const scaleValue = {
        [scale.min]: 100 - currentSelectedValue,
        [scale.max]: currentSelectedValue,
      };
      onAnswer(questionId, scaleValue);
    }
  };

  useEffect(() => {
    if (selectedValue) {
      const value = selectedValue[scale.max];
      setCurrentSelectedValue(value);
    } else {
      setCurrentSelectedValue(null);
    }
  }, [questionId, selectedValue, scale.max]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !isNotSelected) {
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNotSelected, currentSelectedValue]); // 의존성 배열에 isNotSelected 추가

  return (
    <QuestionContainer>
      <Progress percentage={percentage} />
      <QuestionBox>
        <QuestionHeader questionText={questionText} />
      </QuestionBox>
      <SelectContainer>
        <OptionSelector selectedValue={currentSelectedValue} onSelect={handleSelect} options={options} />{' '}
      </SelectContainer>
      <ButtonContainer $isSingleButton={isFirstQuestion}>
        {!isFirstQuestion && <Button onClick={onPrevious}>이전</Button>}
        <Button disabled={isNotSelected} onClick={handleSubmit}>
          다음
        </Button>
      </ButtonContainer>
    </QuestionContainer>
  );
};

export default Question;
