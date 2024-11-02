import styled from 'styled-components';

export const ErrorMessage = styled.div`
  border-radius: 10px;
  background-color: #ff0038;
  border: 1px solid #ae1a;
  padding: 20px;
  min-width: 200px;
  max-width: 400px;
  width: fit-content;
  text-align: center;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);

  h2 {
    margin: 0 0 8px 0;
    padding: 0;
  }
`;
