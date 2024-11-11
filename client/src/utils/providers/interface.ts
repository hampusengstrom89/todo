import * as IF from '../../features/Todo/interface';
import { FilterInterface } from './filtering';
import { SortAttribute } from './sorting';

export interface TodoContextInterface {
  allTodos: IF.Todo[];
  todos: IF.Todo[];
  error: string | null;
  sortAttr: SortAttribute;
  filter: FilterInterface;
  sortAttributes: SortAttribute[];
  setFilter: (attr: string, value: string | boolean | number | null) => void;
  setSortAttr: (sortAttr: SortAttribute) => void;
  addTodo: (todoDraft: IF.TodoDraft) => void;
  deleteTodo: (uuid: IF.Todo['uuid']) => void;
  editTodo: (editedTodo: IF.Todo) => void;
}

export interface ActionInterface {
  type: string;
  payload: any;
}

export interface StateInterface {
  allTodos: IF.Todo[];
  todos: IF.Todo[];
  error: string | null;
  sortAttr: SortAttribute;
  filter: {};
}
