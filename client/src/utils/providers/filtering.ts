import * as IF from '../../features/Todo/interface';
import { TodoContextInterface } from './';

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

export const filter = (
  todos: TodoContextInterface['todos'],
  filter: TodoContextInterface['filter'],
) => {
  const filterKeys = Object.keys(filter);

  const filteredTodos = todos.filter((todo: IF.Todo) =>
    filterKeys.every((key: string) => filterFunctions[key](filter[key], todo)),
  );
  return filteredTodos;
};
