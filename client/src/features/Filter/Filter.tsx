import { useEffect, useState } from 'react';
import Checkbox from '../../components/Checkbox';
import { useTodos } from '../../utils/providers/TodoContext';
import * as IF from '../../interfaces';

interface FilterInterface {
  //   completed: boolean;
  [key: string]: any;
}

export const Filter = () => {
  const {
    todos,
    filterTodos,
  }: {
    todos: IF.Todo[];
    filterTodos: (newFilteredTodos: IF.Todo[]) => void;
  } = useTodos();
  const [filters, setFilters] = useState<FilterInterface>({ completed: false });

  const handleChange = (attr: string) => (value: string | boolean | number) => {
    setFilters(prevFilters => ({ ...prevFilters, [attr]: value }));
  };

  useEffect(() => {
    const filterKeys = Object.keys(filters);
    const newFilteredTodos = todos.filter((todo: IF.Todo) => {
      return filterKeys.every(
        (key: string) => todo[key as keyof IF.Todo] === filters[key],
      );
    });
    filterTodos(newFilteredTodos);
  }, [filters]);

  return (
    <div>
      <div>
        <label>
          Show completed todos
          <Checkbox
            onChange={handleChange('completed')}
            checked={filters.completed || false}
          />
        </label>
      </div>
    </div>
  );
};
