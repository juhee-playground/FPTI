import { WarningText } from './Question.styles';

interface IWarningMessageProps {
  message: string;
}

const WarningMessage = ({ message }: IWarningMessageProps) => <WarningText>{message}</WarningText>;

export default WarningMessage;
