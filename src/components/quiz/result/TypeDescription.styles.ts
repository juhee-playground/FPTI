import styled from 'styled-components';

import { colors } from '@/styles/colors';

// Article 컨테이너 전체를 감싸는 Styled Component
export const ArticleContainer = styled.article`
  padding: 0.5rem;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

// Header는 공룡의 이름과 유형을 표시
export const DinosaurHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// 한글 이름 스타일
export const DinosaurKoreanName = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${colors.black};
  margin: 0;
`;

// 유형 스타일
export const DinosaurType = styled.h3`
  font-size: 1.25rem;
  color: #0128ff;
  margin: 0;
`;

// 각 설명 내용을 담는 텍스트
export const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #333;
`;

// 리스트를 위한 스타일 (특징, 강점 등)
export const List = styled.ul`
  list-style-type: none;
  margin-left: 0;
  margin-bottom: 1rem;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;

  span {
    &:first-child {
      font-weight: 700;
    }
  }
`;
