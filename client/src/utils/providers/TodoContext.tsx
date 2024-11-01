import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
} from 'react';
import * as api from '../../api';
import * as IF from '../../interfaces';

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

  useEffect(() => {
    api.getTodos().then(todos => setTodos(todos));
  }, []);

  const addTodo = (todo: IF.Todo) => {
    console.log('addTodo', todo);
  };

  const deleteTodo = (uuid: IF.Todo['uuid']) => {
    console.log('deleteTodo', uuid);
  };

  const editTodo = (editedTodo: IF.Todo) => {
    setTodos(prevTodos => {
      const index = prevTodos.findIndex(todo => todo.uuid === editedTodo.uuid);
      return [
        ...prevTodos.slice(0, index),
        editedTodo,
        ...prevTodos.slice(index + 1),
      ];
    });

    api
      .editTodo(editedTodo)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  const value: TodoContextValue = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;

export const useTodos = () => useContext(TodoContext);
