import * as IF from '../interfaces';

const BASE_URL = 'http://localhost:8000';

const toJSON = (response: any) => response.json();
const getPayload = (response: any) => response.payload;

export const getTodos = () =>
  fetch(`${BASE_URL}/todos`).then(toJSON).then(getPayload);

export const getTodo = (uuid: string) =>
  fetch(`${BASE_URL}/todos/${uuid}`).then(toJSON).then(getPayload);

export const editTodo = (todo: IF.Todo) =>
  fetch(`${BASE_URL}/todos/${todo.uuid}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  })
    .then(toJSON)
    .then(getPayload);

export const addTodo = (
  title: IF.Todo['title'],
  description: IF.Todo['description'],
  completed: IF.Todo['completed'],
  dueDate: IF.Todo['dueDate'],
) =>
  fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, completed, dueDate }),
  })
    .then(toJSON)
    .then(getPayload);

export const deleteTodo = (uuid: string) =>
  fetch(`${BASE_URL}/todos/${uuid}`, { method: 'DELETE' })
    .then(toJSON)
    .then(getPayload);
