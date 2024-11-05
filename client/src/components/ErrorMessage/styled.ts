import styled from 'styled-components';

export const ErrorMessage = styled.div`
  border-radius: 10px;
  background-color: #ff1640;
  border: 1px solid #ae1a2;
  padding: 20px;
  min-width: 200px;
  max-width: 400px;
  width: fit-content;
  text-align: center;
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  z-index: 1;
  font-family: arial, sans-serif;

  h2 {
    margin: 0 0 8px 0;
    padding: 0;
  }
`;
