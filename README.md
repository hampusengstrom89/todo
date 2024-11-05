# TOD - CLIENT

## Description

The client part of the application is built in ReactJS with TypeScript and runs with Vite.

## Architecture

The application consists of a set of reusable generic components, features with more todo specific components, utils with a provider for todos.
Using generic components with no application specific code makes it easier to reuse them between projects instead of writing them for every project.

There is a centralized main state of the todos which is held by the TodoContext. It contains the array of todos, functionality for updating todos (adding / deleting / editing) and it also syncs the current state of todos with the server and its storage. The TodoContext is needed due to the wide spread of functionality for adding, editing, filtering, sorting, searching etc, all finally resulting in an updated list.

## Layout

The layout consists of header, main, footer

- header: contains a logo, filter-, sort- and search functionality
- main: contains the functionality for adding / editing / deliting a todo, the list of todos and pagination.

- Filter: The filter feature holds the functionality such as filtering and sorting the list of todos. The filter handles filter changes and performs the filtering and sorting operations on the todos which is then provided to the TodoContext.

It is worth noting that, with more time, I would have investigated the possibility to extract the filtering logic to a FilterContext. I'm not sure yet if it is worth centralizing this at the current state of the application.

The application contains no tests, this was not prioritized from my side due to the provided time and the requirements for the task.

## File structure

The components and features has been divided into several files: interface, styled-components and functional component.
The features also uses containers to extract logic from the functional (view) components.

### Folder structure

| Folder           | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| /api             | Client side endpoints for server communcation. This API is only utilized by the TodoContext |
| /components      | Generic and reusable components with minimal logic                                          |
| /features        | Extensive components with their own logic and group of specific components                  |
| /utils/providers | The providers of the application                                                            |

## Getting Started

Install all dependencies

```
$ npm install
```

Start the application at port 5173

```
$ npm run dev
```

To use the client side of the application
Open http://localhost:5173/

# TODO - SERVER

## Description

### Architecture

The server part of the todo application is a RESTapi built in NodeJS using ExpressJS and TypeScript.

It consists of routes, a controller, a model and a storage file.

I like this approach due to its clear separation of responsibilities.
This approach also makes it easier to replace the storage with a database, add different types of data with its own controllers and models.

### Flow

A request is received by the server routes and is passed to the controller.
The controller handles the request by validating incoming data.

- If the validation is unsuccessful, the controller will send a 4xx status back.

- If the validation is successful, the controller will call the model. The model then performs the simple data operations requested to the data in storage, and then send a 200 status back.

```
request -> routes -> controller -> model -> storage
```

## File structure

Explanation regarding the file structure

### Folder structure

| Folder       | Description                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------- |
| /controllers | The controllers implements the main logic such as handling requests and responses, validation |
| /models      | The models implements logic for loading the storage, updating the todos and saving to storage |
| /storage     | A single .json file storing all todos                                                         |
|  index       | The file with routing                                                                         |

## Getting Started

Install all dependencies

```
$ npm install
```

Start the server at port 8000

```
$ npm run dev
```

## Data of todo

A todo consists of a set of attributes as shown below

```
Todo: {
    uuid: string;
    title: string;
    description: string;
    completed: boolean;
    dueDate: number;
}
```

## API Documentation

| Request | Path         | Operation                                   | Response                                 |
| ------- | ------------ | ------------------------------------------- | ---------------------------------------- |
| GET     | /            | Redirects to /todos                         |                                          |
| GET     | /todos       | Gets all todos                              | An array of all todos                    |
| GET     | /todos/:uuid | Gets a single todo                          | The requested todo with a specified uuid |
|         |              |                                             |                                          |
| PUT     | /todos/:uuid | Edits a single todo with a specified uuid   | The edited todo                          |
|         |              |                                             |                                          |
| POST    | /todos       | Adds a single todo                          | The added todo                           |
| DELETE  | /todos/:uuid | Deletes a single todo with a specified uuid | The deleted todo                         |

## Code examples

### GET /todos

```
fetch(`http://localhost:8000/todos`)
```

### GET /todos/:uuid

```
fetch(`http://localhost:8000/todos/${uuid}`)
```

### PUT /todos/:uuid

```
fetch(`http://localhost:8000/todos/${uuid}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uuid, title, description, completed, dueDate }),
})
```

### POST /todos

```
fetch(`http://localhost:8000/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, completed, dueDate }),
})
```

### DELETE /todos/:uuid

```
fetch(`http://localhost:8000/todos/${uuid}`, {
    method: 'DELETE'
})
```
