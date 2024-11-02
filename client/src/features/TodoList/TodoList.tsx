import { ReactElement } from 'react';
import List from '../../components/List';
import Todo from '../Todo';
import * as IF from '../../interfaces';
import { useTodos } from '../../utils/providers/TodoContext';

export const TodoList = (): ReactElement => {
  const { todos }: { todos: IF.Todo[] } = useTodos();

  return (
    <List
      items={todos}
      renderItem={todo => (
        <li key={todo.uuid}>
          <Todo {...todo} />
        </li>
      )}
    />
  );
};
