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

interface PaginationItemProps {
  active?: boolean;
}
export const PaginationItem = styled.li<PaginationItemProps>`
  button {
    color: #ffffff;
    background-color: unset;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: unset;

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
    background-color: #ffffff;
    color: #bf5a54;
    display: flex;
  }
`;
