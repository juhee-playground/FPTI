import { ProgressBar, ProgressFill } from './ProgressBar.styles';

interface IProgressBarProps {
  percentage: number;
}

const Progress = ({ percentage }: IProgressBarProps) => (
  <ProgressBar>
    <ProgressFill $percentage={percentage} />
  </ProgressBar>
);

export default Progress;
