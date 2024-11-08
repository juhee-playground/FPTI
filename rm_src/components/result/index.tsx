import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { ResultContainer, Title, ButtonContainer } from './Result.styles';

import { findResultById } from '@/_rm_src/api/result';
import Button from '@/_rm_src/components/common/button';
import ImageBox from '@/_rm_src/components/common/imageBox';
import TypeComparisonBar from '@/_rm_src/components/result/TypeComparisonBar';
import TypeDescription from '@/_rm_src/components/result/TypeDescription';
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

  const handleShare = async () => {
    const currentUrl = window.location.href;
    const shareData = {
      title: '나의 FPTI를 공유할께~',
      text: '너의 FPTI도 공유해줘!!',
      url: currentUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('성공적으로 공유되었습니다!');
      } else {
        navigator.clipboard.writeText(currentUrl);
        alert('이 브라우저는 공유 기능을 지원하지 않아서 링크를 복사했습니다.');
      }
    } catch (error) {
      console.error('공유 중 오류 발생:', error);
    }
  };

  return (
    <ResultContainer>
      <ImageBox topTypes={fpti} width={300} height={300} />
      <Title>
        <span>{fpti}</span>
        <span>{resultDescription?.type}</span>
      </Title>
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
        <Button variant='outlined' color='cancel' onClick={handleShare}>
          링크 공유하기
        </Button>
      </ButtonContainer>
    </ResultContainer>
  );
};

export default ResultPage;
