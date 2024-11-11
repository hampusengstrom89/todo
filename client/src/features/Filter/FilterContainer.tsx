import { ReactElement } from 'react';
import { Filter } from './Filter';
import { useTodos, TodoContextInterface } from '../../utils/providers';

export const FilterContainer = (): ReactElement => {
  const {
    filter,
    setFilter,
    sortAttr,
    setSortAttr,
    sortAttributes,
  }: TodoContextInterface = useTodos();

  const handleChange =
    (attr: string) =>
    (value: string | boolean | number | null): void =>
      setFilter(attr, value);

  const handleSortChange = (value: string): void => {
    const match = sortAttributes.find(sortByAttr => sortByAttr.value === value);
    if (match) {
      setSortAttr(match);
    }
  };

  return Filter(
    handleChange,
    sortAttr,
    handleSortChange,
    sortAttributes,
    filter,
  );
};
