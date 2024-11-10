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
import { filter, FilterInterface } from './filtering';
import { SortAttribute, sortAttributes, sortTodos } from './sorting';

export interface TodoContextInterface {
  allTodos: IF.Todo[];
  todos: IF.Todo[];
  error: string | null;
  sortAttr: SortAttribute;
  filter: FilterInterface;
  sortAttributes: SortAttribute[];
  setFilter: (attr: string, value: string | boolean | number | null) => void;
  setSortAttr: (sortAttr: SortAttribute) => void;
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
  allTodos: [],
  todos: [],
  sortAttr: sortAttributes[0],
  filter: {
    completed: false,
    startDate: null,
    endDate: null,
  },
  sortAttributes: sortAttributes,
  error: null,
  setSortAttr: () => {},
  setFilter: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
};

const TodoContext = createContext<TodoContextInterface>(defaultValue);

interface ActionInterface {
  type: string;
  payload: any;
}

interface StateInterface {
  allTodos: IF.Todo[];
  todos: IF.Todo[];
  error: string | null;
  sortAttr: SortAttribute;
  filter: {};
}

const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'SET_INITIAL_TODOS':
      var { todos: allTodos } = action.payload;
      var filteredTodos = filter(allTodos, state.filter);
      var sortedTodos = sortTodos(state.sortAttr, filteredTodos);
      return { ...state, allTodos, todos: sortedTodos };

    case 'ADD_TODO':
      var { todo } = action.payload;
      return { ...state, allTodos: [todo, ...state.allTodos] };

    case 'EDIT_TODO':
      var { todo } = action.payload;
      return {
        ...state,
        allTodos: state.allTodos.map(t => (t.uuid === todo.uuid ? todo : t)),
      };

    case 'DELETE_TODO':
      var { todo } = action.payload;
      return {
        ...state,
        allTodos: state.allTodos.filter(t => t.uuid !== todo.uuid),
      };

    case 'SET_ERROR':
      var { error } = action.payload;
      return { ...state, error };

    case 'RESET_ERROR':
      return { ...state, error: null };

    case 'SET_FILTER':
      var { attr, value } = action.payload;
      var newFilter = { ...state.filter, [attr]: value };
      var filteredTodos = filter(state.allTodos, newFilter);
      var sortedTodos = sortTodos(state.sortAttr, filteredTodos);

      return { ...state, filter: newFilter, todos: sortedTodos };

    case 'SET_SORT_ATTR':
      var { sortAttr } = action.payload;
      var sortedTodos = sortTodos(sortAttr, state.todos);

      return {
        ...state,
        sortAttr,
        todos: sortedTodos,
      };

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
    allTodos: [],
    todos: [],
    sortAttr: sortAttributes[0],
    filter: {
      completed: false,
      startDate: null,
      endDate: null,
    },
    error: null,
  });

  const dispatchAction = (type: string) => (payload: any) =>
    dispatch({ type, payload });

  const setError = (errorString: string) => (error: any) => {
    dispatchAction('SET_ERROR')({ error: `${errorString}: ${error.message}` });
    setTimeout(() => dispatchAction('RESET_ERROR')(null), 2000);
  };

  const fetchTodos = () => {
    api
      .getTodos()
      .then(dispatchAction('SET_INITIAL_TODOS'))
      .catch(setError(`Something went wrong while loading todos`));
  };

  const addTodo: TodoContextInterface['addTodo'] = (
    title,
    description,
    completed,
    dueDate,
  ) => {
    api
      .addTodo(title, description, completed, dueDate)
      .then(dispatchAction('ADD_TODO'))
      .catch(setError(`Something went wrong when creating todo`));
  };

  const deleteTodo: TodoContextInterface['deleteTodo'] = uuid => {
    api
      .deleteTodo(uuid)
      .then(dispatchAction('DELETE_TODO'))
      .catch(setError(`Something went wrong when deleting todo`));
  };

  const editTodo: TodoContextInterface['editTodo'] = todo => {
    api
      .editTodo(todo)
      .then(dispatchAction('EDIT_TODO'))
      .catch(setError(`Something went wrong when editing todo`));
  };

  const setFilter: TodoContextInterface['setFilter'] = (attr, value) => {
    dispatch({ type: 'SET_FILTER', payload: { attr, value } });
  };

  const setSortAttr: TodoContextInterface['setSortAttr'] = (
    sortAttr: SortAttribute,
  ) => {
    dispatch({ type: 'SET_SORT_ATTR', payload: { sortAttr } });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => console.log(state), [state]);

  const value: TodoContextInterface = {
    ...state,
    sortAttributes,
    setFilter,
    setSortAttr,
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
