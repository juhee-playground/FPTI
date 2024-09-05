import {
  TypeComparisonBarContainer,
  LabelContainer,
  Label,
  BarWrapper,
  Progress,
  PercentageText,
  MainLabelContainer,
} from './TypeComparisonBar.styles';

interface ITypeComparisonBarProps {
  startLabel: string;
  endLabel: string;
  percentage: number;
  isReverse: boolean;
}

const TypeComparisonBar = ({ startLabel, endLabel, percentage, isReverse }: ITypeComparisonBarProps) => {
  const mainLabel = isReverse ? endLabel : startLabel;
  // const secondaryLabel = isReverse ? startLabel : endLabel;

  return (
    <TypeComparisonBarContainer>
      {/* 상단에 주요 레이블과 퍼센트 표시 */}
      <MainLabelContainer>
        <PercentageText $isMain $percentage={percentage} $isReverse>
          {parseFloat(percentage.toFixed(2))}% {mainLabel}
        </PercentageText>
      </MainLabelContainer>

      {/* ProgressBar */}
      <BarWrapper $isReverse={isReverse}>
        <Progress $percentage={percentage} $type={isReverse ? endLabel : startLabel} $isReverse={isReverse} />
      </BarWrapper>

      {/* 하단에 각각의 퍼센트와 레이블 표시 */}
      <LabelContainer>
        <Label $isMain>
          {percentage.toFixed(2)}% {startLabel}
        </Label>
        <Label>
          {(100 - percentage).toFixed(2)}% {endLabel}
        </Label>
      </LabelContainer>
    </TypeComparisonBarContainer>
  );
};

export default TypeComparisonBar;
