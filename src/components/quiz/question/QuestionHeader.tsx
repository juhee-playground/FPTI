import { QuestionText } from './Question.styles';

interface IQuestionHeaderProps {
  questionText: string;
}

const QuestionHeader = ({ questionText }: IQuestionHeaderProps) => <QuestionText>{questionText}</QuestionText>;

export default QuestionHeader;
