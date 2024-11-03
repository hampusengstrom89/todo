import { useEffect, useState } from 'react';
import Checkbox from '../../components/Checkbox';
import { useTodos } from '../../utils/providers/TodoContext';
import * as IF from '../../interfaces';
import DateInput from '../../components/DateInput';

import TextInput from '../../components/TextInput';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import * as sc from './styled';

interface FilterInterface {
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

interface SortOptions {
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

export const Filter = () => {
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

  const handleChange = (attr: string) => (value: string | boolean | number) => {
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

  const handleSortChange = (value: string) => {
    const match = sortOptions.find(sortByAttr => sortByAttr.value === value);
    if (match) {
      setSortByAttr(match);
    }
  };

  useEffect(() => {
    filterTodos();
  }, [filters, todos]);

  useEffect(() => {
    const sortedFilteredTodos = [...filteredTodos].sort(sortBy);
    setFilteredTodos(sortedFilteredTodos);
  }, [sortByAttr]);

  return (
    <sc.FilterContainer>
      <sc.Search>
        <TextInput
          onChange={handleChange('search')}
          value={''}
          placeHolder="Search for todos"
        />
      </sc.Search>
      <sc.Sort>
        <Dropdown
          activeOption={sortByAttr}
          onChange={handleSortChange}
          options={sortOptions}
        />
      </sc.Sort>
      <sc.Filter>
        <Checkbox
          label="Completed"
          onChange={handleChange('completed')}
          checked={filters.completed}
        />
        <DateInput label="Start date" onChange={handleChange('startDate')} />
        <DateInput label="End date" onChange={handleChange('endDate')} />
      </sc.Filter>
    </sc.FilterContainer>
  );
};
