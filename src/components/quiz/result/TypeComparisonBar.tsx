import {
  TypeComparisonBarContainer,
  TypeContainer,
  TypeLabel,
  TypeDescription,
  BarWrapper,
  Progress,
  PercentageText,
} from './TypeComparisonBar.styles';

import { PERSONALITY_TYPES } from '@/constants/PersonalityType';

interface ITypeComparisonBarProps {
  startLabel: string;
  midLabel?: string;
  endLabel: string;
  percentage: number;
  isReverse: boolean;
}

const getPersonalityName = (id: string) => {
  const item = PERSONALITY_TYPES[id];
  return item ? item.type : 'Unknown';
};

const TypeComparisonBar = ({ startLabel, midLabel, endLabel, percentage, isReverse }: ITypeComparisonBarProps) => {
  const mainLabel = isReverse ? endLabel : startLabel;

  const finalStartLabel = midLabel || startLabel;
  const isStartLabelMain = finalStartLabel === mainLabel;
  const isEndLabelMain = endLabel === mainLabel;

  const startTypeInfo = getPersonalityName(finalStartLabel);
  const endTypeInfo = getPersonalityName(endLabel);

  return (
    <TypeComparisonBarContainer>
      <TypeContainer>
        <TypeLabel $isMain={isStartLabelMain}>{finalStartLabel}</TypeLabel>
        <TypeDescription $isMain={isStartLabelMain}>{startTypeInfo}</TypeDescription>
      </TypeContainer>

      <BarWrapper $isReverse={isReverse}>
        <Progress $percentage={percentage} $type={isReverse ? endLabel : startLabel} $isReverse={isReverse}>
          <PercentageText $isMain $percentage={percentage} $isReverse={isReverse}>
            {`${percentage.toFixed(0)}%`}
          </PercentageText>
        </Progress>
      </BarWrapper>

      <TypeContainer>
        <TypeLabel $isMain={isEndLabelMain}>{endLabel}</TypeLabel>
        <TypeDescription $isMain={isEndLabelMain}>{endTypeInfo}</TypeDescription>
      </TypeContainer>
    </TypeComparisonBarContainer>
  );
};

export default TypeComparisonBar;
