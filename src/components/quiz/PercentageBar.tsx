import { PercentageBarContainer, Label, PercentageWrapper, Progress, PercentageText } from './PercentageBar.styles';

interface IPercentageBarProps {
  startLabel: string;
  endLabel: string;
  percentage: number;
  isReverse: boolean;
}

const PercentageBar = ({ startLabel, endLabel, percentage, isReverse }: IPercentageBarProps) => {
  return (
    <PercentageBarContainer>
      <Label $isStart>{startLabel}</Label>
      <PercentageWrapper $isReverse={isReverse}>
        <Progress $percentage={percentage} $type={isReverse ? endLabel : startLabel} $isReverse={isReverse} />
        <PercentageText $percentage={percentage} $isReverse={isReverse}>
          {parseFloat(percentage.toFixed(2))}%
        </PercentageText>
      </PercentageWrapper>
      <Label>{endLabel}</Label>
    </PercentageBarContainer>
  );
};

export default PercentageBar;
