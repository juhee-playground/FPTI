import { useNavigate } from 'react-router-dom';

import PercentageBar from './PercentageBar';
import { ResultContainer, ResultItem, Button } from './Result.styles';
import ImageBox from '../common/imageBox';

interface IResultProps {
  finalResult: IPersonalityTypeScores;
  onRetry: () => void; // 검사 다시하기를 위한 함수
}

const getTopTypesSorted = (finalResult: IPersonalityTypeScores) => {
  const selectedTypes: { type: string; group: string }[] = [];

  // 각 그룹의 성향 중 퍼센트가 더 큰 타입만 선택
  Object.entries(finalResult).forEach(([group, values]) => {
    const [type1, percentage1] = Object.entries(values)[0];
    const [type2, percentage2] = Object.entries(values)[1];

    // 더 큰 퍼센트 값을 가진 타입을 선택
    if (percentage1 >= percentage2) {
      selectedTypes.push({ type: type1, group });
    } else {
      selectedTypes.push({ type: type2, group });
    }
  });

  // 그룹 우선순위 배열 정의
  const groupPriorityOrder = [
    'Leader vs Supporter',
    'Attacker vs Guardian',
    'Dribbler vs Playmaker',
    'Competitor vs Entertainer',
  ];

  // 선택된 타입들을 그룹 우선순위에 따라 정렬
  const sortedTypes = selectedTypes.sort(
    (a, b) => groupPriorityOrder.indexOf(a.group) - groupPriorityOrder.indexOf(b.group),
  );

  // 정렬된 타입들을 문자열로 반환
  return sortedTypes.map(item => item.type).join('');
};

const sortFinalResult = (finalResult: IPersonalityTypeScores) => {
  // 그룹 우선순위 배열 정의
  const groupPriorityOrder = [
    'Leader vs Supporter',
    'Attacker vs Guardian',
    'Dribbler vs Playmaker',
    'Competitor vs Entertainer',
  ];

  // Object.entries를 사용해 finalResult의 키-값 쌍을 배열로 변환
  const sortedEntries = Object.entries(finalResult).sort(([groupA], [groupB]) => {
    const indexA = groupPriorityOrder.indexOf(groupA);
    const indexB = groupPriorityOrder.indexOf(groupB);
    return indexA - indexB;
  });

  // 정렬된 엔트리를 다시 객체로 변환하여 반환
  const sortedFinalResult = Object.fromEntries(sortedEntries);
  return sortedFinalResult;
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
      {Object.entries(sortedFinalResult).map(([group, values]) => {
        const [type1, percentage1] = Object.entries(values)[0];
        const [type2, percentage2] = Object.entries(values)[1];

        const largerPercentage = Math.max(percentage1, percentage2);
        const isReverse = percentage2 > percentage1; // type2가 크면 반대로 설정

        return (
          <div key={group}>
            <h3>{group}</h3>
            <ResultItem>
              <PercentageBar startLabel={type1} endLabel={type2} percentage={largerPercentage} isReverse={isReverse} />
            </ResultItem>
          </div>
        );
      })}
      <ImageBox topTypes={topTypes} />
      <Button onClick={handleRetry}>검사 다시하기</Button> {/* 검사 다시하기 버튼 */}
    </ResultContainer>
  );
};

export default Result;
