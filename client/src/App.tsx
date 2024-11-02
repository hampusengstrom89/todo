import './App.css';
import AddableTodo from './features/AddableTodo';
import Filter from './features/Filter';
import TodoList from './features/TodoList';
import * as sc from './styled';

function App() {
  return (
    <>
      <sc.Header>
        <h1>Todo</h1>
        <Filter />
      </sc.Header>
      <sc.Main>
        <AddableTodo />
        <TodoList />
      </sc.Main>
    </>
  );
}

export default App;
