import { readFileSync as load, writeFileSync as save } from "fs";

import { IFTodo } from "../interfaces/TodoInterface";
import { byDueDate } from "../utils";

const PATH = "./storage/todos.json";

const loadTodos = (): IFTodo[] => JSON.parse(load(PATH, "utf8"));
const storeTodos = (todos: IFTodo[]): void => save(PATH, JSON.stringify(todos));

/*
 *
 * Creates a new todo item and saves it in storage
 * Expects unique uuid
 *
 * @param todo Todo item.
 * @return The created and saved todo item.
 *
 */

export const createTodo = (todo: IFTodo): IFTodo => {
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

export const removeTodo = (uuid: IFTodo["uuid"]): IFTodo | null => {
  const todos = loadTodos();

  const index = todos.findIndex((todo: IFTodo) => todo.uuid === uuid);

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

export const getTodos = (offset: number, limit: number): IFTodo[] => {
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
 * @return The todo item with matching uuid, null if no match is found
 *
 */
export const getTodo = (uuid: IFTodo["uuid"]): IFTodo | null => {
  const todos = loadTodos();

  const match = todos.find((todo: IFTodo) => todo.uuid === uuid);

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
 * @return The new todo item if successful update, null if the todo item referenced by uuid is not found
 *
 */

export const updateTodo = (
  uuid: IFTodo["uuid"],
  todo: IFTodo
): IFTodo | null => {
  const todos = loadTodos();
  const index = todos.findIndex((todo: IFTodo) => todo.uuid === uuid);
  if (index < 0) {
    return null;
  }

  todos[index] = todo;
  storeTodos(todos);

  return todo;
};
