import styled from 'styled-components';
import * as IF from '../../components/Button/interface';
import { RefObject } from 'react';

interface EditableTodoProps {
  ref: RefObject<HTMLElement>;
}

export const EditableTodo = styled.div<EditableTodoProps>`
  opacity: 1;
  width: 100%;

  & > div {
    padding: 12px 48px 48px 12px;
    position: relative;
  }

  input[type='text'] {
    margin-bottom: 5px;
    font-size: 16px;
    width: 100%;
  }

  input[type='date'] {
    position: absolute;
    left: 12px;
    bottom: 8px;
  }

  textArea {
    width: 100%;
  }

  &.error > div {
    animation: errorFlash 500ms linear infinite;

    @keyframes errorFlash {
      50% {
        background-color: #fc8a8a;
      }
    }
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
  transition: opacity 0.2s ease-in-out;
  border-radius: 7px;

  svg {
    fill: #f2ad4a;
    opacity: 0.5;
  }
  &:hover {
    svg {
      fill: #f2ad4a;
      opacity: 1;
    }
  }
`;

export const SaveButton = styled(DefaultButton)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-radius: 7px;
  svg {
    fill: #f2ad4a;
    opacity: 0.5;
  }
  &:hover {
    svg {
      fill: #f2ad4a;
      opacity: 1;
    }
  }
`;
