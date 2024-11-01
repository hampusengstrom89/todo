import './App.css';
import TodoListContainer from './features/TodoList';
import * as sc from './styled';

function App() {
  return (
    <>
      <sc.Header>
        <h1>Todo</h1>
        <h2>Filter & Sort</h2>
      </sc.Header>
      <sc.Main>
        <h2>Add todo</h2>
        <TodoListContainer />
      </sc.Main>
    </>
  );
}

export default App;
