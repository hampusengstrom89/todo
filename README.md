# TOD - CLIENT

## Description

The client application is built in reactjs with typescript and runs with vite.
It consists of a set of reusable generic components, features with more todo specific components, utils with a provider for todos.
The layout consists of a <header> containing a logo, filter-, sort- and search functionality, meanwhile the <main> element contains the functionality to add a todo, to edit a todo, the list of todos and the pagination.

TodoContext is the main state for todos, it contains the array of todos, functionality for updating todos (adding / deleting / editing) and also syncing the todos with the server side storage. The TodoContext is needed due to the spread functionality of adding, editing, filtering, sorting, searching etc all finally resulting in a updated list.

The components and features has been divided in several files for interface, styled-components and functional component.
The features also uses containers to extract logic from the functional (view) components.

There is also a folder, api, which is the endpoints on the client side for communicating with the server RESTapi. The api is only called by the TodoContext.

There is a filter feature which holds the functionality of filtering and sorting the list of todos. The filter component registers filter changes and performs the filtering and sorting operations on the todos array which is then provided to the TodoContext which holds the array of filteredTodos.

Worth noting is that I, with more time, would have investigated the possiblity to extract filtering logic to a FilteringContext. I'm not sure yet if it is worth centeralizing or not. It might be fine as it is for the current task.

The application contains no tests, this was not prioritized from my side due to the provided time and the requirements for the task.

## File structure

/api - Client side endpoints for communcation with server. this api is only utilized by the TodoContext.
/components - Generic and reusable components with minimal logic
/features - Extensive components with their own logic and specific components
/utils/providers - The providers/contexts of the application

## Getting Started

1. Run the command "npm install" to install all dependencies
2. Run the command "npm run dev" to start the client application at port 5173
3. Open http://localhost:5173/ to use the client side of the application

# TODO - SERVER

## Description

The server (RESTapi) part of the todo application. The server is built in node with expressjs and typescript.
The server consists of a few routes, a controller, a model and the storage.
This approach makes it easier to switch the storage for example a database, add handling for different models and controlles for using reminders etc.

A request is received by the server and is referred to the todoController by the routes.
The todoController handles the request by validating incoming data.

If the data is invalid a 4xx status is sent back.

If the data passes the validation the todoController then tells the todoModel to perform the requested operation on the todos in storage.

request --> routes --> controller --> model --> storage

## File structure

/controllers - The controllers implements the main logic such as handling requests and responses, validation
/models - The models implements logic for loading the storage, updating the todos and saving to storage
/storage - A single .json file storing all todos
index - The request routes

## Getting Started

1. Run the command "npm install" to install all dependencies
2. Run the command "npm run dev" to start the server at port 8000

## API Documentation

```
Todo: {
    uuid: string;
    title: string;
    description: string;
    completed: boolean;
    dueDate: number;
}
```

```
GET /

redirects to /todos

---------------------------------------------------------------------------------------

GET /todos

Returns an array of todos

Example:

fetch(`http://localhost:8000/todos`)

---------------------------------------------------------------------------------------

GET /todos/:uuid

Returns a specific todo with a given uuid

Example:

fetch(`http://localhost:8000/todos/${uuid}`)

---------------------------------------------------------------------------------------

PUT /todos/:uuid

Edits a todo with a given uuid, returns the todo after being edit

Example:

fetch(`http://localhost:8000/todos/${uuid}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({todo}),
})

---------------------------------------------------------------------------------------

POST /todos

Adds a todo without uuid, returns the todo with uuid after being added

Example:

fetch(`http://localhost:8000/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, completed, dueDate }),
  })

---------------------------------------------------------------------------------------

DELETE /todos/:uuid

Deletes a specific todo with a given uuid, returns the todo after being deleted

Example:

fetch(`${BASE_URL}/todos/${uuid}`, { method: 'DELETE' })

---------------------------------------------------------------------------------------

```
