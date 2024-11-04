import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5px;
  justify-content: center;
  color: #ffffff;
`;

interface PaginationItemProps {
  active?: boolean;
}
export const PaginationItem = styled.li<PaginationItemProps>`
  button {
    color: #ffffff;
    background-color: unset;
    padding: 2px 4px;
    border-radius: 4px;

    justify-content: center;
    align-items: center;

    &:active,
    &:focus,
    &:focus-visible &:hover {
      border: none;
      outline: none;
    }
  }

  &[data-active='true'] button {
    background-color: #f2ad4a;
    color: #ffffff;
    display: flex;
  }
`;
