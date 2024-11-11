import {
  createContext,
  useContext,
  useEffect,
  ReactElement,
  useReducer,
} from 'react';
import * as api from '../../api';
import { ErrorMessage } from '../../components/ErrorMessage';
import { SortAttribute, sortAttributes } from './sorting';
import { todosReducer } from './reducer';
import { TodoContextInterface } from './';
import {
  RESET_ERROR,
  SET_ERROR,
  SET_INITIAL_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_FILTER,
  SET_SORT_ATTR,
} from './actions';
import { TodoDraft } from '../../features/Todo/interface';

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

const TodoProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): ReactElement => {
  const [state, dispatch] = useReducer(todosReducer, {
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
    dispatchAction(SET_ERROR)({ error: `${errorString}: ${error.message}` });
    setTimeout(() => dispatchAction(RESET_ERROR)(null), 2000);
  };

  const fetchTodos = () => {
    api
      .getTodos()
      .then(dispatchAction(SET_INITIAL_TODOS))
      .catch(setError(`Something went wrong while loading todos`));
  };

  const addTodo: TodoContextInterface['addTodo'] = (todoDraft: TodoDraft) => {
    api
      .addTodo(todoDraft)
      .then(dispatchAction(ADD_TODO))
      .catch(setError(`Something went wrong when creating todo`));
  };

  const deleteTodo: TodoContextInterface['deleteTodo'] = uuid => {
    api
      .deleteTodo(uuid)
      .then(dispatchAction(DELETE_TODO))
      .catch(setError(`Something went wrong when deleting todo`));
  };

  const editTodo: TodoContextInterface['editTodo'] = todo => {
    api
      .editTodo(todo)
      .then(dispatchAction(EDIT_TODO))
      .catch(setError(`Something went wrong when editing todo`));
  };

  const setFilter: TodoContextInterface['setFilter'] = (attr, value) => {
    dispatch({ type: SET_FILTER, payload: { attr, value } });
  };

  const setSortAttr: TodoContextInterface['setSortAttr'] = (
    sortAttr: SortAttribute,
  ) => {
    dispatch({ type: SET_SORT_ATTR, payload: { sortAttr } });
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
