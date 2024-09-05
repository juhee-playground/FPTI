import { useNavigate } from 'react-router-dom';

import { ResultContainer, ResultItem, Button } from './Result.styles';

import ImageBox from '@/components/common/imageBox';
import TypeComparisonBar from '@/components/quiz/result/TypeComparisonBar';

interface IResultProps {
  finalResult: IPersonalityTypeScores;
  onRetry: () => void;
}

const GROUP_PRIORITY_ORDER = [
  '주도형 vs 서포터형',
  '공격형 vs 수비형',
  '개인기형 vs 패스형',
  '승부추구형 vs 재미추구형',
];

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
  console.log(finalResult);
  const navigate = useNavigate();

  const topTypes = getTopTypesSorted(finalResult);
  const sortedFinalResult = sortFinalResult(finalResult);

  const handleRetry = () => {
    onRetry(); // 퀴즈 데이터 초기화
    navigate('/landing'); // 퀴즈 페이지로 이동
  };

  return (
    <ResultContainer>
      <h2>너의 타입은 : {topTypes}</h2>
      <ImageBox topTypes={topTypes} />
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
      <Button onClick={handleRetry}>검사 다시하기</Button> {/* 검사 다시하기 버튼 */}
    </ResultContainer>
  );
};

export default Result;
