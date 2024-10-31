import { IFTodo } from "../interfaces/TodoInterface";

export const byDueDate = (todoA: IFTodo, todoB: IFTodo): number =>
  todoA.dueDate - todoB.dueDate;
