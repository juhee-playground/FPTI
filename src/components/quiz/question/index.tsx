import { useEffect, useState } from 'react';

import { QuestionContainer, QuestionBox, SelectContainer } from './Question.styles';

import backgroundImg from '@/assets/bg_field.png';
import Button from '@/components/common/button';
import Progress from '@/components/common/progressBar';
import OptionSelector from '@/components/quiz/question/OptionSelector';
import QuestionHeader from '@/components/quiz/question/QuestionHeader';
import WarningMessage from '@/components/quiz/question/WarningMessage';

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
        <QuestionHeader questionText={questionText} />
      </QuestionBox>
      <SelectContainer>
        <OptionSelector selectedValue={currentSelectedValue} onSelect={handleSelect} options={options} />{' '}
      </SelectContainer>
      {showWarning && <WarningMessage message='값을 선택해 주세요!'></WarningMessage>}
      <Button disabled={isNotSelected} onClick={handleSubmit}>
        다음
      </Button>
    </QuestionContainer>
  );
};

export default Question;
