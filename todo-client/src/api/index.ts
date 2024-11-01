import * as IF from '../interfaces';

const BASE_URL = 'http://localhost:8000';

const toJSON = (response: any) => response.json();
const getPayload = (response: any) => response.payload;

export const getTodos = () =>
  fetch(`${BASE_URL}/todos`).then(toJSON).then(getPayload);

export const getTodo = (uuid: string) =>
  fetch(`${BASE_URL}/todos/${uuid}`).then(toJSON).then(getPayload);

export const editTodo = (todo: IF.Todo) =>
  fetch(`${BASE_URL}/todo/${todo.uuid}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  })
    .then(toJSON)
    .then(getPayload);

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
  })
    .then(toJSON)
    .then(getPayload);

export const deleteTodo = (uuid: string) =>
  fetch(`${BASE_URL}/todo/${uuid}`, { method: 'DELETE' })
    .then(toJSON)
    .then(getPayload);
