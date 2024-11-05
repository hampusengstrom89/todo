import './App.css';
import AddableTodo from './features/AddableTodo';
import Filter from './features/Filter';
import TodoList from './features/TodoList';
import * as sc from './styled';

function App() {
  return (
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
}

export default App;
