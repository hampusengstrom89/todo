import styled from 'styled-components';
import * as IF from '../../interfaces';

interface TodoProps {
  $completed: boolean;
}

export const Todo = styled.div<TodoProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px 41px 12px 24px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #1a1a1a;
  width: 100%;
  max-width: 350px;
  border: 1px solid #884545;
  min-height: 125px;
  box-sizing: border-box;
  padding-bottom: 48px;
  ${props => (props.$completed ? 'opacity: 0.5;' : '')}
  transition: 0.1s opacity ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
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

export const EditableTodo = styled(Todo)`
  opacity: 1;
  padding: 8px 41px 40px 16px;
  input[type='text'] {
    margin-bottom: 5px;
    font-size: 16px;
  }
  input[type='date'] {
    position: absolute;
    left: 16px;
    bottom: 8px;
  }
  textArea {
    font-size: 12px;
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
    fill: #ee9d87;
  }
`;

export const EditButton = styled(DefaultButton)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  opacity: 0.2;
  transition: opacity 0.2s ease-in-out;
  border-radius: 7px;

  &:hover {
    opacity: 1;
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
