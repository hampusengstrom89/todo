import styled from 'styled-components';

export const Todo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px 24px;
  border-radius: 8px;
  margin: 8px 0;
  background-color: rgba(255, 255, 255, 0.8);
  color: #1a1a1a;
  width: 100%;
  max-width: 250px;
  border: 1px solid #884545;
  min-height: 100px;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }

  time {
    font-size: 10px;
    position: absolute;
    left: 24px;
    bottom: 12px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40px;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    border-radius: 0 7px 7px 0;
    border: none;
    outline: none;

    svg {
      stroke: #1a1a1a;
    }

    &:hover {
      opacity: 1;
    }

    &:active,
    &:visited,
    &:focus {
      border: none;
      outline: none;
    }
  }
`;
