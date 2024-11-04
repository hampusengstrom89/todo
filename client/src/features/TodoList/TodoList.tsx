import { ReactElement } from 'react';
import List from '../../components/List';
import Todo from '../Todo';
import * as IF from '../Todo/interface';
import { useTodos } from '../../utils/providers/TodoContext';
import Pagination from '../../components/Pagination';

export const TodoList = (): ReactElement => {
  const { filteredTodos }: { filteredTodos: IF.Todo[] } = useTodos();
  return (
    <Pagination hits={10} items={filteredTodos}>
      {items => (
        <List items={items}>
          {todo => (
            <li key={todo.uuid}>
              <Todo {...todo} />
            </li>
          )}
        </List>
      )}
    </Pagination>
  );
};
