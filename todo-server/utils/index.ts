import { Todo } from "../interfaces/TodoInterface";

export const byDueDate = (todoA: Todo, todoB: Todo) =>
  todoA.dueDate - todoB.dueDate;
