import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { ResultContainer, Title, ResultItem, Button } from './Result.styles';

import { findResultById } from '@/api/result';
import ImageBox from '@/components/common/imageBox';
import TypeComparisonBar from '@/components/result/TypeComparisonBar';
import TypeDescription from '@/components/result/TypeDescription';
import { reconstructResultFromQueryString } from '@/utils/queryString';

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { fpti } = useParams();
  const queryString = location.search.split('?finalResult=')[1] || '';
  const resultDescription = findResultById(fpti || '');
  const reconstructedResult = reconstructResultFromQueryString(queryString);

  const handleRetry = () => {
    navigate('/landing');
  };

  return (
    <ResultContainer>
      <ImageBox topTypes={fpti} />
      <Title>너의 타입은 : {fpti}</Title>
      {Object.entries(reconstructedResult).map(([group, values]) => {
        const [type1, percentage1] = Object.entries(values)[0];
        const [type2, percentage2] = Object.entries(values)[1];

        const midLabel = values.M ? 'M' : undefined;
        const isReverse = percentage2 > percentage1;
        return (
          <ResultItem key={group}>
            <TypeComparisonBar
              startLabel={type1}
              midLabel={midLabel}
              endLabel={type2}
              percentage={Math.max(percentage1, percentage2)}
              isReverse={isReverse}
            />
          </ResultItem>
        );
      })}
      <TypeDescription content={resultDescription} />
      <Button onClick={handleRetry}>검사 다시하기</Button>
    </ResultContainer>
  );
};

export default ResultPage;
