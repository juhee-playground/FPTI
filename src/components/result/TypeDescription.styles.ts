import styled from 'styled-components';

import { TextNoneDrag } from '@/styles/mixins';

export const ArticleContainer = styled.article`
  ${TextNoneDrag}
  padding: 1.25rem;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DescriptionTitle = styled.h3`
  margin: 8px 0;
  font-size: 1rem;
`;

export const DescriptionText = styled.p`
  line-height: 1.6;
  font-size: 0.8125rem;
  color: #333;
  text-align: left;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
`;

export const ListItemColumn = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
  text-align: left;

  span {
    &:first-child {
      font-weight: 700;
    }

    &:last-child {
      font-weight: 400;
      font-size: 0.8125rem;
    }
  }
`;

export const ListItem = styled.li`
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;

  span {
    &:last-child {
      font-weight: 400;
      font-size: 0.8125rem;
    }
  }
`;
