import styled from 'styled-components';

interface CardProps {
  $inActive: boolean;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #1a1a1a;
  width: 100%;
  max-width: 350px;
  border: 1px solid #884545;
  min-height: 125px;
  box-sizing: border-box;
  transition: 0.1s opacity ease-in-out;
  ${props => (props.$inActive ? 'opacity: 0.5;' : '')}
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
