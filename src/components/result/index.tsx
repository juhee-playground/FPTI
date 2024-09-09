import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { ResultContainer, Title, ButtonContainer } from './Result.styles';

import { findResultById } from '@/api/result';
import Button from '@/components/common/button';
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

  const handleCopyLink = () => {
    const currentUrl = window.location.origin;
    const shareableUrl = `${currentUrl}/result/${fpti}?finalResult=${queryString}`;

    console.log(shareableUrl);

    navigator.clipboard.writeText(shareableUrl).then(() => {
      alert('링크가 클립보드에 복사되었습니다!');
    });
  };

  return (
    <ResultContainer>
      <div>
        <ImageBox topTypes={fpti} width={300} height={300} />
        <Title>
          <span>너의 타입은 </span>
          <span>
            {fpti} ({resultDescription?.type})
          </span>
        </Title>
      </div>
      {Object.entries(reconstructedResult).map(([group, values]) => {
        const [type1, percentage1] = Object.entries(values)[0];
        const [type2, percentage2] = Object.entries(values)[1];

        const midLabel = values.M ? 'M' : undefined;
        const isReverse = percentage2 > percentage1;
        return (
          <React.Fragment key={group}>
            <TypeComparisonBar
              startLabel={type1}
              midLabel={midLabel}
              endLabel={type2}
              percentage={Math.max(percentage1, percentage2)}
              isReverse={isReverse}
            />
          </React.Fragment>
        );
      })}
      <TypeDescription content={resultDescription} />
      <ButtonContainer>
        <Button variant='outlined' color='cancel' onClick={handleRetry}>
          검사 다시하기
        </Button>
        <Button variant='outlined' color='cancel' onClick={handleCopyLink}>
          링크 복사하기
        </Button>
      </ButtonContainer>
    </ResultContainer>
  );
};

export default ResultPage;
