import { IFTodo } from '../interfaces/TodoInterface';

const BASE_URL = 'http://localhost:8000';

const toJSON = (response: any) => response.json();

export const getTodos = () => fetch(`${BASE_URL}/todos`).then(toJSON);

export const getTodo = (uuid: string) =>
  fetch(`${BASE_URL}/todos/${uuid}`).then(toJSON);

export const editTodo = (todo: IFTodo) =>
  fetch(`${BASE_URL}/todo/${todo.uuid}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  }).then(toJSON);

export const addTodo = (
  title: string,
  description: string,
  completed: boolean,
  dueDate: number,
) =>
  fetch(`${BASE_URL}/todo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, completed, dueDate }),
  }).then(toJSON);

export const deleteTodo = (uuid: string) =>
  fetch(`${BASE_URL}/todo/${uuid}`, { method: 'DELETE' }).then(toJSON);
