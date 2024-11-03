import styled from 'styled-components';
import * as IF from '../../interfaces';

export const EditableTodo = styled.div`
  opacity: 1;
  padding: 0 16px 36px 0;

  input[type='text'] {
    margin-bottom: 5px;
    font-size: 16px;
    width: 100%;
  }
  input[type='date'] {
    position: absolute;
    left: 24px;
    bottom: 8px;
  }
  textArea {
    font-size: 12px;
    width: 100%;
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

export const DeleteButton = styled(DefaultButton)`
  position: absolute;
  right: 5px;
  top: 5px;
  opacity: 0.2;
  transition: opacity 0.2s ease-in-out;
  border-radius: 7px;

  &:hover {
    opacity: 1;
  }
`;

export const SaveButton = styled(DefaultButton)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-radius: 7px;
  svg {
    stroke: #1a1a1a;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
