import {
  createContext,
  useContext,
  useEffect,
  ReactElement,
  useReducer,
} from 'react';
import * as api from '../../api';
import * as IF from '../../features/Todo/interface';
import { ErrorMessage } from '../../components/ErrorMessage';

interface TodoContextValue {
  todos: IF.Todo[];
  filteredTodos: IF.Todo[];
  error: string | null;
  setFilteredTodos: (todos: IF.Todo[]) => void;
  addTodo: (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => void;
  deleteTodo: (uuid: IF.Todo['uuid']) => void;
  editTodo: (editedTodo: IF.Todo) => void;
}

const defaultValue = {
  todos: [],
  filteredTodos: [],
  error: null,
  setFilteredTodos: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
};

const TodoContext = createContext<TodoContextValue>(defaultValue);

interface ActionInterface {
  type: string;
  payload: any;
}

interface StateInterface {
  todos: IF.Todo[];
  filteredTodos: IF.Todo[];
  error: string | null;
}

const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'SET_INITIAL_TODOS':
      var { todos } = action.payload;
      return { ...state, todos: todos, filteredTodos: todos };

    case 'ADD_TODO':
      var { todo } = action.payload;
      return { ...state, todos: [todo, ...state.todos] };

    case 'EDIT_TODO':
      var { todo } = action.payload;
      return {
        ...state,
        todos: state.todos.map(t => (t.uuid === todo.uuid ? todo : t)),
      };

    case 'DELETE_TODO':
      var { todo } = action.payload;
      return {
        ...state,
        todos: state.todos.filter(t => t.uuid !== todo.uuid),
      };

    case 'SET_FILTERED_TODOS':
      var { todos } = action.payload;
      return { ...state, filteredTodos: todos };

    case 'SET_ERROR':
      var { error } = action.payload;
      return { ...state, error };

    case 'RESET_ERROR':
      return { ...state, error: null };

    default:
      return state;
  }
};

const TodoProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): ReactElement => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    filteredTodos: [],
    error: null,
  });

  const dispatchAction = (type: string) => (payload: any) =>
    dispatch({ type, payload });

  const setError = (error: string) => {
    dispatchAction('SET_ERROR')({ error });
    setTimeout(() => dispatchAction('RESET_ERROR')(null), 2000);
  };

  const fetchTodos = () => {
    api
      .getTodos()
      .then(dispatchAction('SET_INITIAL_TODOS'))
      .catch(error =>
        setError(`Something went wrong while loading todos: ${error.message}`),
      );
  };

  const addTodo = (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => {
    api
      .addTodo(title, description, completed, dueDate)
      .then(dispatchAction('ADD_TODO'))
      .catch(error =>
        setError(`Something went wrong when creating todo: ${error.message}`),
      );
  };

  const deleteTodo = (uuid: IF.Todo['uuid']) => {
    api
      .deleteTodo(uuid)
      .then(dispatchAction('DELETE_TODO'))
      .catch(error =>
        setError(`Something went wrong when deleting todo: ${error.message}`),
      );
  };

  const editTodo = (todo: IF.Todo) => {
    api
      .editTodo(todo)
      .then(dispatchAction('EDIT_TODO'))
      .catch(error =>
        setError(`Something went wrong when editing todo: ${error.message}`),
      );
  };

  const setFilteredTodos = (todos: IF.Todo[]) =>
    dispatchAction('SET_FILTERED_TODOS')({ todos });

  useEffect(() => {
    fetchTodos();
  }, []);

  const value: TodoContextValue = {
    ...state,
    setFilteredTodos,
    addTodo,
    deleteTodo,
    editTodo,
  };

  return (
    <TodoContext.Provider value={value}>
      <>
        {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
        {children}
      </>
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodos = () => useContext(TodoContext);
