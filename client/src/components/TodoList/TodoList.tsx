import * as IF from '../../interfaces';
import { useTodos } from '../../utils/providers/TodoContext';
import Todo from '../Todo';

import * as sc from './styled';

export const TodoList = () => {
  const { todos }: { todos: IF.Todo[] } = useTodos();

  return (
    <sc.TodoList>
      {todos.map((todo: IF.Todo) => (
        <Todo key={todo.uuid} todo={todo} />
      ))}
    </sc.TodoList>
  );
};
