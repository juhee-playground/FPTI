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
  const mainLabel = midLabel || (isReverse ? endLabel : startLabel);

  const finalStartLabel = midLabel || startLabel;
  const isStartLabelMain = finalStartLabel === mainLabel;
  const isEndLabelMain = endLabel === mainLabel;

  const startTypeInfo = getPersonalityName(finalStartLabel);
  const endTypeInfo = getPersonalityName(endLabel);

  return (
    <TypeComparisonBarContainer>
      <TypeContainer $isReverse={true}>
        <TypeLabel $isMain={isStartLabelMain} $type={isReverse ? endLabel : startLabel}>
          {finalStartLabel}
        </TypeLabel>
        <TypeDescription>{startTypeInfo}</TypeDescription>
      </TypeContainer>

      <BarWrapper $isReverse={isReverse}>
        <Progress $percentage={percentage} $type={isReverse ? endLabel : startLabel} $isReverse={isReverse}>
          <PercentageText $isMain $percentage={percentage} $isReverse={isReverse}>
            {`${Math.ceil(percentage)}%`}
          </PercentageText>
        </Progress>
      </BarWrapper>

      <TypeContainer $isReverse={false}>
        <TypeLabel $isMain={isEndLabelMain} $type={isReverse ? endLabel : startLabel}>
          {endLabel}
        </TypeLabel>
        <TypeDescription>{endTypeInfo}</TypeDescription>
      </TypeContainer>
    </TypeComparisonBarContainer>
  );
};

export default TypeComparisonBar;
