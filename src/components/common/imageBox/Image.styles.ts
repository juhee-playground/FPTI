import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const ImageContainer = styled.img`
  border: solid 1px ${colors.border.black};
  border-radius: 0.875rem;
  object-fit: cover;
`;
