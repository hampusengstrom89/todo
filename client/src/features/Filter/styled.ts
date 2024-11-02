import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  background-color: #5a5a5a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Filter = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  row-gap: 4px;
  width: 100%;
  max-width: 350px;
  padding: 16px 0;
`;
