import { ReactElement, useEffect, useState } from 'react';
import { useTodos } from '../../utils/providers/TodoContext';
import * as IF from '../../interfaces';
import { Filter } from './Filter';

export interface FilterInterface {
  [key: string]: any;
}

interface FilterFunctionsInterface {
  [key: string]: Function;
}

const filterFunctions: FilterFunctionsInterface = {
  startDate: (filterValue: number | null, todo: IF.Todo) =>
    filterValue !== null ? todo.dueDate >= filterValue : true,

  endDate: (filterValue: number | null, todo: IF.Todo) =>
    filterValue !== null ? todo.dueDate <= filterValue : true,

  completed: (filterValue: boolean, todo: IF.Todo) =>
    filterValue !== null ? todo.completed === filterValue : true,

  search: (filterValue: string, todo: IF.Todo) =>
    filterValue !== null
      ? todo.title.toLowerCase().startsWith(filterValue.toLowerCase())
      : true,
};

export interface SortOptions {
  name: string;
  value: string;
}

const sortOptions: SortOptions[] = [
  {
    name: 'Alphabetically',
    value: 'title',
  },
  {
    name: 'Due date',
    value: 'dueDate',
  },
];

export const FilterContainer = (): ReactElement => {
  const {
    todos,
    filteredTodos,
    setFilteredTodos,
  }: {
    todos: IF.Todo[];
    filteredTodos: IF.Todo[];
    setFilteredTodos: (newFilteredTodos: IF.Todo[]) => void;
  } = useTodos();

  const [filters, setFilters] = useState<FilterInterface>({
    completed: false,
    startDate: null,
    endDate: null,
  });

  const [sortByAttr, setSortByAttr] = useState<SortOptions>(sortOptions[0]);

  const handleChange =
    (attr: string) =>
    (value: string | boolean | number): void => {
      setFilters(prevFilters => ({ ...prevFilters, [attr]: value }));
    };

  const sortBy = (a: IF.Todo, b: IF.Todo) => {
    const attr = sortByAttr.value as keyof IF.Todo;
    if (a[attr] < b[attr]) {
      return -1;
    } else if (b[attr] === a[attr]) {
      return 0;
    } else {
      return 1;
    }
  };

  const filterTodos = () => {
    const filterKeys = Object.keys(filters);

    const filteredTodos = todos.filter((todo: IF.Todo) =>
      filterKeys.every((key: string) =>
        filterFunctions[key](filters[key], todo),
      ),
    );
    filteredTodos.sort(sortBy);
    setFilteredTodos(filteredTodos);
  };

  const handleSortChange = (value: string): void => {
    const match = sortOptions.find(sortByAttr => sortByAttr.value === value);
    if (match) {
      setSortByAttr(match);
    }
  };

  useEffect(() => filterTodos(), [filters, todos]);

  useEffect(
    () => setFilteredTodos([...filteredTodos].sort(sortBy)),
    [sortByAttr],
  );

  return Filter(
    handleChange,
    sortByAttr,
    handleSortChange,
    sortOptions,
    filters,
  );
};
