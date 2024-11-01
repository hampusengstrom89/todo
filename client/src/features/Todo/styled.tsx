import styled from 'styled-components';
import * as IF from '../../interfaces';

export const Todo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px 53px 12px 24px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #1a1a1a;
  width: 100%;
  max-width: 350px;
  border: 1px solid #884545;
  min-height: 125px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  time {
    font-size: 10px;
    position: absolute;
    left: 24px;
    bottom: 12px;
  }
`;

export const EditableTodo = styled(Todo)`
  input[type='text'] {
    margin-bottom: 5px;
    font-size: 18px;
  }
`;

const DefaultButton = styled.button<IF.Button>`
  display: flex;
  background-color: unset;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
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
`;

export const EditButton = styled(DefaultButton)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
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
  background-color: rgba(0, 0, 0, 1);
  border-radius: 7px;
`;
