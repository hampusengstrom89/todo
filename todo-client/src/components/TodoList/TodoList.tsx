import { IFTodo } from '../../interfaces/TodoInterface';
import { useTodos } from '../../utils/providers/TodoContext';
import Todo from '../Todo';

import * as sc from './styled';

export const TodoList = () => {
  const { todos }: { todos: IFTodo[] } = useTodos();

  return (
    <sc.TodoList>
      {todos.map((todo: IFTodo) => (
        <Todo key={todo.uuid} todo={todo} />
      ))}
    </sc.TodoList>
  );
};
