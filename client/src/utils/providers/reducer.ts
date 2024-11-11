import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  RESET_ERROR,
  SET_ERROR,
  SET_FILTER,
  SET_INITIAL_TODOS,
  SET_SORT_ATTR,
} from './actions';
import { filter } from './filtering';
import { ActionInterface, StateInterface } from './interface';
import { sortTodos } from './sorting';

export const todosReducer = (
  state: StateInterface,
  action: ActionInterface,
) => {
  switch (action.type) {
    case SET_INITIAL_TODOS: {
      const { todos: allTodos } = action.payload;
      const filteredTodos = filter(allTodos, state.filter);
      const sortedTodos = sortTodos(state.sortAttr, filteredTodos);
      return { ...state, allTodos, todos: sortedTodos };
    }

    case ADD_TODO: {
      const { todo } = action.payload;
      const allTodos = [todo, ...state.allTodos];
      const filteredTodos = filter(allTodos, state.filter);
      const sortedTodos = sortTodos(state.sortAttr, filteredTodos);
      return {
        ...state,
        allTodos: allTodos,
        todos: sortedTodos,
      };
    }

    case EDIT_TODO: {
      const { todo } = action.payload;
      return {
        ...state,
        allTodos: state.allTodos.map(t => (t.uuid === todo.uuid ? todo : t)),
        todos: state.todos.map(t => (t.uuid === todo.uuid ? todo : t)),
      };
    }

    case DELETE_TODO: {
      const { todo } = action.payload;
      return {
        ...state,
        allTodos: state.allTodos.filter(t => t.uuid !== todo.uuid),
        todos: state.todos.filter(t => t.uuid !== todo.uuid),
      };
    }

    case SET_ERROR: {
      const { error } = action.payload;
      return { ...state, error };
    }

    case RESET_ERROR: {
      return { ...state, error: null };
    }

    case SET_FILTER: {
      const { attr, value } = action.payload;
      const newFilter = { ...state.filter, [attr]: value };
      const filteredTodos = filter(state.allTodos, newFilter);
      const sortedTodos = sortTodos(state.sortAttr, filteredTodos);

      return { ...state, filter: newFilter, todos: sortedTodos };
    }

    case SET_SORT_ATTR: {
      const { sortAttr } = action.payload;
      const sortedTodos = sortTodos(sortAttr, state.todos);

      return {
        ...state,
        sortAttr,
        todos: sortedTodos,
      };
    }

    default: {
      return state;
    }
  }
};
