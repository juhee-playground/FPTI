import PercentageBar from './PercentageBar';
import { ResultContainer, ResultItem } from './Result.styles';

interface IResultProps {
  finalResult: IPersonalityTypeScores;
}

const getTopTypesSorted = (finalResult: IPersonalityTypeScores) => {
  const allTypes: { type: string; percentage: number }[] = [];

  // 각 그룹의 성향을 배열로 모은다
  Object.values(finalResult).forEach(group => {
    Object.entries(group).forEach(([type, percentage]) => {
      allTypes.push({ type, percentage });
    });
  });

  // 우선순위 배열 정의
  const priorityOrder = ['L', 'S', 'A', 'G', 'P', 'D', 'C', 'E'];

  // 우선순위와 퍼센테이지에 따라 정렬
  allTypes.sort((a, b) => {
    const aPriority = priorityOrder.indexOf(a.type);
    const bPriority = priorityOrder.indexOf(b.type);

    if (aPriority === bPriority) {
      return b.percentage - a.percentage; // 우선순위가 같으면 퍼센테이지로 정렬
    }

    return aPriority - bPriority; // 우선순위가 다르면 우선순위로 정렬
  });

  // 상위 4개의 성향만 추출하고, type만 뽑아서 문자열로 반환
  return allTypes
    .slice(0, 4)
    .map(item => item.type)
    .join('');
};

const Result = ({ finalResult }: IResultProps) => {
  const topTypes = getTopTypesSorted(finalResult);

  console.log(finalResult);

  return (
    <ResultContainer>
      <h2>{topTypes}</h2>
      {Object.entries(finalResult).map(([group, values]) => {
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
    </ResultContainer>
  );
};

export default Result;
