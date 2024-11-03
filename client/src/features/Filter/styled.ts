import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  background-color: #5a5a5a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  gap: 16px;
`;

export const Filter = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  row-gap: 4px;
  width: 100%;
  max-width: 350px;
  padding: 16px;
  border: 1px solid white;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;

  &:after {
    content: 'Filter';
    position: absolute;
    top: 0;
    left: 10px;
    background-color: #5a5a5a;
    transform: translateY(-60%);
    padding: 0 12px;
  }
`;

export const Search = styled.div`
  display: flex;
  column-gap: 16px;
  row-gap: 4px;
  width: 100%;
  max-width: 350px;
  padding: 16px;
  border: 1px solid white;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;

  input {
    width: 100%;
    max-width: 350px;
  }

  &:after {
    content: 'Search';
    position: absolute;
    top: 0;
    left: 10px;
    background-color: #5a5a5a;
    transform: translateY(-60%);
    padding: 0 12px;
  }
`;
export const Sort = styled.div`
  display: flex;
  column-gap: 16px;
  row-gap: 4px;
  width: 100%;
  max-width: 350px;
  padding: 16px;
  border: 1px solid white;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;

  input {
    width: 100%;
    max-width: 350px;
  }

  &:after {
    content: 'Search';
    position: absolute;
    top: 0;
    left: 10px;
    background-color: #5a5a5a;
    transform: translateY(-60%);
    padding: 0 12px;
  }
`;
