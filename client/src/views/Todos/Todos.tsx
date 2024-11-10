import AddableTodo from '../../features/AddableTodo';
import Filter from '../../features/Filter';
import TodoList from '../../features/TodoList';
import * as sc from './styled';

export const Todos = () => (
  <>
    <sc.Header>
      <sc.Title>
        <h1>Todo.</h1>
      </sc.Title>
      <Filter />
    </sc.Header>
    <sc.Main>
      <AddableTodo />
      <TodoList />
    </sc.Main>
    <sc.Footer>
      Todo.
      <br />
      by Hampus Engström
    </sc.Footer>
  </>
);
