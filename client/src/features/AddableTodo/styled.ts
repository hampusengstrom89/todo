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
  width: 100%;
  max-width: 480px;
  border: 1px solid #b75752;
  color: #b75752;
  height: fit-content;
  box-sizing: border-box;
  transition: 0.1s opacity ease-in-out;
  margin-bottom: 16px;
  background-color: unset;

  @media only screen and (max-width: 568px) {
    max-width: unset;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
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
