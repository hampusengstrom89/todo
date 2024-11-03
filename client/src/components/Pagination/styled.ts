import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5px;
  justify-content: center;
`;

interface PaginationButtonProps {
  $active?: boolean;
}
export const PaginationButton = styled.button<PaginationButtonProps>`
  background-color: ${({ $active }) => ($active ? '#5a5a5a' : 'unset')};
  padding: 2px 4px;
  border-radius: 4px;
  color: #ffffff;
  justify-content: center;
  align-items: center;

  &:nth-of-type(1),
  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-last-of-type(3),
  &:nth-last-of-type(2),
  &:nth-last-of-type(1) {
    display: flex;
  }

  display: ${({ $active }) => ($active ? 'flex' : 'none')};

  &:active,
  &:focus,
  &:focus-visible &:hover {
    border: none;
    outline: none;
  }
`;
