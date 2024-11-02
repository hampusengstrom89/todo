import { ReactElement } from 'react';
import List from '../../components/List';
import Todo from '../Todo';
import * as IF from '../../interfaces';
import { useTodos } from '../../utils/providers/TodoContext';

export const TodoList = (): ReactElement => {
  const { filteredTodos }: { filteredTodos: IF.Todo[] } = useTodos();

  return (
    <List
      items={filteredTodos}
      renderItem={todo => (
        <li key={todo.uuid}>
          <Todo {...todo} />
        </li>
      )}
    />
  );
};
