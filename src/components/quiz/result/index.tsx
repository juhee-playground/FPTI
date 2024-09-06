import { useNavigate } from 'react-router-dom';

import { ResultContainer, Title, ResultItem, Button } from './Result.styles';

import { findResultById } from '@/api/result';
import ImageBox from '@/components/common/imageBox';
import TypeComparisonBar from '@/components/quiz/result/TypeComparisonBar';
import TypeDescription from '@/components/quiz/result/TypeDescription';

interface IResultProps {
  finalResult: IPersonalityTypeScores;
  onRetry: () => void;
}

const GROUP_PRIORITY_ORDER = ['책임감과 주도성', '팀에서의 역할', '플레이 스타일', '목표와 우선순위'];

const getTopTypesSorted = (finalResult: IPersonalityTypeScores): string => {
  const selectedTypes = Object.entries(finalResult).map(([group, values]) => {
    const [type1, percentage1] = Object.entries(values)[0];
    const [type2, percentage2] = Object.entries(values)[1];
    return percentage1 >= percentage2 ? { type: type1, group } : { type: type2, group };
  });

  selectedTypes.sort((a, b) => GROUP_PRIORITY_ORDER.indexOf(a.group) - GROUP_PRIORITY_ORDER.indexOf(b.group));

  return selectedTypes.map(item => item.type).join('');
};

const sortFinalResult = (finalResult: IPersonalityTypeScores): IPersonalityTypeScores => {
  return Object.fromEntries(
    Object.entries(finalResult).sort(([groupA], [groupB]) => {
      return GROUP_PRIORITY_ORDER.indexOf(groupA) - GROUP_PRIORITY_ORDER.indexOf(groupB);
    }),
  );
};

const Result = ({ finalResult, onRetry }: IResultProps) => {
  const navigate = useNavigate();

  const topTypes = getTopTypesSorted(finalResult);
  const sortedFinalResult = sortFinalResult(finalResult);

  const resultDescription = findResultById(topTypes) || null;
  console.log(resultDescription);

  const handleRetry = () => {
    onRetry();
    navigate('/landing');
  };

  return (
    <ResultContainer>
      <ImageBox topTypes={topTypes} />
      <Title>너의 타입은 : {topTypes}</Title>
      {Object.entries(sortedFinalResult).map(([group, values]) => {
        const [type1, percentage1] = Object.entries(values)[0];
        const [type2, percentage2] = Object.entries(values)[1];
        const isReverse = percentage2 > percentage1;
        return (
          <ResultItem key={group}>
            <TypeComparisonBar
              startLabel={type1}
              endLabel={type2}
              percentage={Math.max(percentage1, percentage2)}
              isReverse={isReverse}
            />
          </ResultItem>
        );
      })}
      <TypeDescription content={resultDescription} />
      <Button onClick={handleRetry}>검사 다시하기</Button> {/* 검사 다시하기 버튼 */}
    </ResultContainer>
  );
};

export default Result;
