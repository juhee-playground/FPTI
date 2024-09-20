import styled from 'styled-components';

import { Image } from '../public/bg-landing.png';
import { colors } from '../src/styles/colors';

export const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${colors.button.basic};
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;
