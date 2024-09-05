import styled from 'styled-components';

import { colors } from '@/styles/colors';

// Article 컨테이너 전체를 감싸는 Styled Component
export const ArticleContainer = styled.article`
  padding: 0.5rem;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

export const DinosaurName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
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
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.black};
  margin: 0;
`;

// 유형 스타일
export const DinosaurType = styled.h3`
  font-size: 1.5rem;
  color: #0128ff;
  margin: 0;
`;

// Description을 위한 Section
export const DescriptionSection = styled.section`
  margin-bottom: 1rem;
`;

// 각 설명 내용을 담는 텍스트
export const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #333;
`;

// Team Role을 설명하는 Section
export const TeamRoleSection = styled.section`
  margin-bottom: 1rem;
`;

// 추천 전술을 위한 Section
export const RecommendedTacticsSection = styled.section`
  margin-bottom: 1rem;
`;

// 롤 모델 설명 섹션
export const RoleModelSection = styled.section`
  margin-bottom: 1rem;
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
`;
