import styled from 'styled-components';

interface DropdownListProps {
  $show: boolean;
}

export const Dropdown = styled.div<DropdownListProps>`
  position: relative;
  width: 100%;
  max-width: 480px;

  > button {
    background-color: #ffffff;
    border-radius: ${({ $show }) => ($show ? '6px 6px 0 0' : '6px')};
    border: 1px solid #1a1a1a;
    ${({ $show }) => ($show ? 'border-bottom: unset;' : '')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
    font-size: 16px;
    font-family: arial, sans-serif;
  }
`;

export const DropdownList = styled.ul<DropdownListProps>`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  background-color: #ffffff;
  border: 1px solid #1a1a1a;
  flex-direction: column;
  color: #1a1a1a;
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 0 0 6px 6px;
  position: absolute;
  z-index: 99;
  width: 100%;
  box-sizing: border-box;

  li {
    border-bottom: 1px solid #1a1a1a;
    &:last-of-type {
      border-bottom: none;
    }
    button {
      background-color: unset;
      width: 100%;
      text-align: start;
      font-size: 16px;
      font-family: arial, sans-serif;
    }
  }
`;
