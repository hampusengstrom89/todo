import styled from 'styled-components';
import * as IF from '../../interfaces';

export const Todo = styled.div`
  & > div {
    padding-right: 40px;
  }

  h2 {
    margin: 0 0 12px;
    padding: 0;
    font-size: 16px;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  time {
    font-size: 10px;
    position: absolute;
    left: 24px;
    bottom: 12px;
  }
`;

const DefaultButton = styled.button<IF.Button>`
  display: flex;
  background-color: unset;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  padding: 0;
  border: none;
  outline: none;

  svg {
    stroke: #1a1a1a;
  }

  &:active,
  &:visited,
  &:focus {
    border: none;
    outline: none;
  }
`;

export const CheckButton = styled(DefaultButton)`
  position: absolute;
  right: 5px;
  top: 5px;
  svg {
    fill: #b75752;
  }
`;

export const EditButton = styled(DefaultButton)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  transition: opacity 0.2s ease-in-out;
  border-radius: 7px;

  svg {
    stroke: #f2ad4a;
    opacity: 0.5;
  }

  &:hover {
    svg {
      stroke: #f2ad4a;
      opacity: 1;
    }
  }
`;
