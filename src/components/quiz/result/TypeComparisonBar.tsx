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
  endLabel: string;
  percentage: number;
  isReverse: boolean;
}

const getPersonalityName = (id: string) => {
  const item = PERSONALITY_TYPES[id];
  return item ? item.type : 'Unknown';
};

const TypeComparisonBar = ({ startLabel, endLabel, percentage, isReverse }: ITypeComparisonBarProps) => {
  const mainLabel = isReverse ? endLabel : startLabel;
  const isStartLabelMain = startLabel === mainLabel;
  const isEndLabelMain = endLabel === mainLabel;

  // 사용 예시
  const startTypeInfo = getPersonalityName(startLabel);
  const endTypeInfo = getPersonalityName(endLabel);

  return (
    <TypeComparisonBarContainer>
      {/* <LabelContainer> */}
      <TypeContainer>
        <TypeLabel $isMain={isStartLabelMain}>{startLabel}</TypeLabel>
        <TypeDescription $isMain={isStartLabelMain}>{startTypeInfo}</TypeDescription>
      </TypeContainer>

      {/* 프로그레스 바 */}
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
      {/* </LabelContainer> */}
    </TypeComparisonBarContainer>
  );
};

export default TypeComparisonBar;
