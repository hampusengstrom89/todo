import styled from 'styled-components';

export const CreateTodoButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  padding: 12px 24px;
  border-radius: 8px;
  // background-color: rgba(255, 255, 255, 0.8);
  color: #1a1a1a;
  width: 100%;
  max-width: 350px;
  border: 1px solid #884545;
  height: fit-content;
  box-sizing: border-box;
  transition: 0.1s opacity ease-in-out;
  margin-bottom: 16px;
  background-color: unset;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #884545;
  }

  h2 {
    margin: 0 0 12px;
    padding: 0;
    font-size: 16px;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;
