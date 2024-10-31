import { readFileSync as load, writeFileSync as save } from "fs";

import { Todo } from "../interfaces/TodoInterface";
import { byDueDate } from "../utils";

const PATH = "../storage/todos.json";

const loadTodos = (): Todo[] => JSON.parse(load(PATH, "utf8"));
const storeTodos = (todos: Todo[]): void => save(PATH, JSON.stringify(todos));

/*
 *
 * Creates a new todo item and saves it in storage
 * Expects unique uuid
 *
 * @param todo Todo item.
 * @return The created and saved todo item.
 *
 */

export const createTodo = (todo: Todo): Todo | undefined => {
  if (!todo) {
    return;
  }

  const todos = loadTodos();

  todos.push(todo);
  todos.sort(byDueDate);

  storeTodos(todos);

  return todo;
};

/*
 *
 * Removes an existing todo item referenced by uuid
 *
 * @param uuid Todo item uuid.
 * @return The removed item, null if uuid is not found.
 *
 */

export const removeTodo = (uuid: Todo["uuid"]): Todo | null => {
  const todos = loadTodos();

  const index = todos.findIndex((todo: Todo) => todo.uuid === uuid);

  if (index < 0) {
    return null;
  }

  const match = todos[index];
  todos.splice(index, 1);

  storeTodos(todos);

  return match;
};

/*
 *
 * Gets paginated todo items
 *
 * @param offset Start position in the array of todo items to be returned.
 * @param limit Number of todo items to be returned.
 * @return Subset of todo items starting at offset ranging limit number of todo items.
 *
 */

export const getTodos = (offset: number, limit: number): Todo[] => {
  const todos = loadTodos();
  if (!todos || todos.length === 0) {
    return [];
  }
  const subTodos = todos.slice(offset, offset + limit);
  return subTodos;
};

/*
 *
 * Gets a single todo item
 *
 * @param uuid The uuid of todo item to be returned.
 * @return The todo item with matching uuid, undefined if no uuid is specified, null if no match is found
 *
 */
export const getTodo = (uuid: Todo["uuid"]): Todo | null | undefined => {
  const todos = loadTodos();

  if (!uuid) {
    return;
  }

  const match = todos.find((todo: Todo) => todo.uuid === uuid);

  if (!match) {
    return null;
  }

  return match;
};

/*
 *
 * Updates a single todo item
 *
 * @param uuid The uuid of todo item to be updated.
 * @param todo The new todo item to replace the previous one.
 * @return The new todo item if successful update, null if the todo item referenced by uuid is not found, undefined if uuid or todo is not specified
 *
 */

export const updateTodo = (
  uuid: Todo["uuid"],
  todo: Todo
): Todo | null | undefined => {
  const todos = loadTodos();

  if (!uuid || !todo) {
    return;
  }

  const index = todos.findIndex((todo: Todo) => todo.uuid === uuid);
  if (index < 0) {
    return null;
  }

  todos[index] = todo;
  storeTodos(todos);

  return todo;
};
