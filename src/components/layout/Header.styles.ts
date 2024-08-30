import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
`;
