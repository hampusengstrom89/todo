import * as IF from "../interfaces";

export const byDueDate = (todoA: IF.Todo, todoB: IF.Todo): number =>
  todoA.dueDate - todoB.dueDate;
