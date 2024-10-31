import './App.css';
import TodoList from './components/TodoList';
import * as sc from './styled';

function App() {
  return (
    <>
      <sc.Header>Filter & Sort</sc.Header>
      <sc.Main>
        <h1>Todo</h1>
        <TodoList />
      </sc.Main>
    </>
  );
}

export default App;
