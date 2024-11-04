import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
} from 'react';
import * as api from '../../api';
import * as IF from '../../features/Todo/interface';
import { ErrorMessage } from '../../components/ErrorMessage';

interface TodoContextValue {
  todos: IF.Todo[];
  filteredTodos: IF.Todo[];
  setFilteredTodos: (newFilteredTodos: IF.Todo[]) => void;
  isFetching: boolean;
  addTodo: (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => void;
  deleteTodo: (uuid: IF.Todo['uuid']) => void;
  editTodo: (editedTodo: IF.Todo) => void;
}

const todoInitial: TodoContextValue = {
  todos: [],
  filteredTodos: [],
  isFetching: true,
  setFilteredTodos: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
};

const TodoContext = createContext<TodoContextValue>(todoInitial);

const TodoProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): ReactElement => {
  const [todos, setTodos] = useState<IF.Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<IF.Todo[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getTodos()
      .then(todos => {
        setIsFetching(false);
        setTodos(todos);
        setFilteredTodos(todos);
      })
      .catch(error => {
        setIsFetching(false);
        setError(`Something went wrong while loading todos: ${error.message}`);
        setTimeout(() => setError(null), 2000);
      });
  }, []);

  const addTodo = (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => {
    api
      .addTodo(title, description, completed, dueDate)
      .then(newTodo => {
        setTodos(prevTodos => {
          return [newTodo, ...prevTodos];
        });
      })
      .catch(error => {
        setError(`Something went wrong when creating todo: ${error.message}`);
        setTimeout(() => setError(null), 2000);
      });
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
        setError(`Something went wrong when deleting todo: ${error.message}`);
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
        setError(`Something went wrong when editing todo: ${error.message}`);
        setTimeout(() => setError(null), 2000);
      });
  };

  const value: TodoContextValue = {
    todos,
    setFilteredTodos,
    filteredTodos,
    isFetching,
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
