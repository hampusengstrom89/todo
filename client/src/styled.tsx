import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  margin-bottom: 40px;
  align-items: center;
  color: #ffffff;
  background-color: #b75752;
  border-bottom: 1px solid #1a1a1a;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #575757;
  margin: 0;
  padding: 10px 0;
  background-color: white;

  h1 {
    color: #575757;
    margin: 0;
    max-width: 768px;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 568px) {
      padding: 0 16px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin-bottom: 40px;
  align-items: center;
  width: 480px;
  box-sizing: border-box;

  @media only screen and (max-width: 568px) {
    width: 100%;
    padding: 0 16px;
  }
`;
