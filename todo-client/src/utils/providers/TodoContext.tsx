import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
} from 'react';
import * as api from '../../api';

const TodoContext = createContext({ todos: [] });

const TodoProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): ReactElement => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.getTodos().then(todos => setTodos(todos));
  }, []);

  const addTodo = () => {
    console.log('addTodo');
  };

  const deleteTodo = () => {
    console.log('deleteTodo');
  };

  const editTodo = () => {
    console.log('editTodo');
  };

  const value = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;

export const useTodos = () => {
  const value = useContext(TodoContext);
  return value;
};
