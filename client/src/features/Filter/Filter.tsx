import { useEffect, useState } from 'react';
import Checkbox from '../../components/Checkbox';
import { useTodos } from '../../utils/providers/TodoContext';
import * as IF from '../../interfaces';
import DateInput from '../../components/DateInput';

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
};

export const Filter = () => {
  const {
    todos,
    setFilteredTodos,
  }: {
    todos: IF.Todo[];
    setFilteredTodos: (newFilteredTodos: IF.Todo[]) => void;
  } = useTodos();
  const [filters, setFilters] = useState<FilterInterface>({
    completed: false,
    startDate: null,
    endDate: null,
  });

  const handleChange = (attr: string) => (value: string | boolean | number) => {
    setFilters(prevFilters => ({ ...prevFilters, [attr]: value }));
  };

  const filterTodos = () => {
    const filterKeys = Object.keys(filters);

    const filteredTodos = todos.filter((todo: IF.Todo) =>
      filterKeys.every((key: string) =>
        filterFunctions[key](filters[key], todo),
      ),
    );
    setFilteredTodos(filteredTodos);
  };

  useEffect(() => {
    filterTodos();
  }, [filters, todos]);

  return (
    <sc.FilterContainer>
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
