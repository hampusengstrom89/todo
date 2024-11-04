import styled from 'styled-components';

export const FilterCompleted = styled.div`
  display: flex;
  grid-column: span 2;
  gap: 9px;
  flex-basis: 100%;
`;

export const FilterDate = styled.div`
  display: flex;
  gap: 16px;

  @media only screen and (max-width: 568px) {
    gap: 8px;
    flex-direction: column;
    flex: 1;
  }
`;

export const Filter = styled.div`
  width: 100%;
  background-color: #b75752;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 768px;
  padding: 30px;
  box-sizing: border-box;
  margin: auto;

  @media only screen and (max-width: 568px) {
    padding: 16px;
  }
`;

export const Search = styled.div`
  width: auto;
  background-color: #b75752;
  display: flex;
  padding: 0;
  margin: 16px 0;
  box-sizing: border-box;
  flex-grow: 1;
`;

export const FilterArea = styled.div`
  column-gap: 16px;
  row-gap: 16px;
  width: 100%;
  padding: 16px;
  border: 1px solid white;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  &:after {
    content: 'Filter';
    position: absolute;
    top: 0;
    left: 10px;
    background-color: #b75752;
    transform: translateY(-60%);
    padding: 0 12px;
  }
`;

export const SearchArea = styled.div`
  display: flex;
  column-gap: 16px;
  row-gap: 4px;
  width: 100%;
  padding: 16px;
  border: 1px solid white;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;

  input {
    width: 100%;
    max-width: 480px;
  }

  &:after {
    content: 'Search';
    position: absolute;
    top: 0;
    left: 10px;
    background-color: #b75752;
    transform: translateY(-60%);
    padding: 0 12px;
  }
`;

export const SortArea = styled.div`
  display: flex;
  column-gap: 16px;
  row-gap: 4px;
  width: 100%;
  max-width: 250px;
  padding: 16px;
  border: 1px solid white;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  height: fit-content;
  margin: 16px 0;

  input {
    width: 100%;
    max-width: 250px;
  }

  &:after {
    content: 'Sort';
    position: absolute;
    top: 0;
    left: 10px;
    background-color: #b75752;
    transform: translateY(-60%);
    padding: 0 12px;
  }
`;
