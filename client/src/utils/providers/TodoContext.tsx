import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
} from 'react';
import * as api from '../../api';
import * as IF from '../../interfaces';
import { ErrorMessage } from '../../components/ErrorMessage';

interface TodoContextValue {
  todos: IF.Todo[];
  addTodo: (todo: IF.Todo) => void;
  deleteTodo: (uuid: IF.Todo['uuid']) => void;
  editTodo: (editedTodo: IF.Todo) => void;
}

const todoInitial: TodoContextValue = {
  todos: [],
  addTodo: (todo: IF.Todo) => {},
  deleteTodo: (uuid: IF.Todo['uuid']) => {},
  editTodo: (editedTodo: IF.Todo) => {},
};

const TodoContext = createContext<TodoContextValue>(todoInitial);

const TodoProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): ReactElement => {
  const [todos, setTodos] = useState<IF.Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getTodos()
      .then(todos => setTodos(todos))
      .catch(error => {
        setError('Något gick tokigt');
        setTimeout(() => setError(null), 2000);
      });
  }, []);

  const addTodo = (todo: IF.Todo) => {
    console.log('addTodo', todo);
  };

  const deleteTodo = (uuid: IF.Todo['uuid']) => {
    api
      .deleteTodo(uuid)
      .then(() => {
        setTodos(prevTodos => {
          const index = prevTodos.findIndex(todo => todo.uuid === uuid);
          return [...prevTodos.slice(0, index), ...prevTodos.slice(index + 1)];
        });
      })
      .catch(error => {
        setError('Något gick tokigt');
        setTimeout(() => setError(null), 2000);
      });
  };

  const editTodo = (editedTodo: IF.Todo) => {
    api
      .editTodo(editedTodo)
      .then(() => {
        setTodos(prevTodos => {
          const index = prevTodos.findIndex(
            todo => todo.uuid === editedTodo.uuid,
          );
          return [
            ...prevTodos.slice(0, index),
            editedTodo,
            ...prevTodos.slice(index + 1),
          ];
        });
      })
      .catch(error => {
        setError('Något gick tokigt');
        setTimeout(() => setError(null), 2000);
      });
  };

  const value: TodoContextValue = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
  };

  return (
    <TodoContext.Provider value={value}>
      <>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {children}
      </>
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodos = () => useContext(TodoContext);
