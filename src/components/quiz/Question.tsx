import { QuestionContainer, QuestionText, ButtonContainer, Button } from './Question.styles';

import backgroundImg from '@/assets/bg_field.png'; // 배경 이미지 경로

type QuestionProps = {
  questionText: string;
  onAnswer: (answer: boolean) => void;
};

const Question = ({ questionText, onAnswer }: QuestionProps) => {
  return (
    <QuestionContainer $backgroundImage={backgroundImg}>
      <QuestionText>{questionText}</QuestionText>
      <ButtonContainer>
        <Button onClick={() => onAnswer(true)}>Yes</Button>
        <Button onClick={() => onAnswer(false)}>No</Button>
      </ButtonContainer>
    </QuestionContainer>
  );
};

export default Question;
