# TOD - CLIENT

## Description

The client application is built in reactjs with typescript and runs with vite.
It consists of a set of reusable generic components, features with more todo specific components, utils with a provider for todos.
The layout consists of a <header> containing a logo, filter-, sort- and search functionality, meanwhile the <main> element contains the functionality to add a todo, to edit a todo, the list of todos and the pagination.

# TODO - SERVER

## Description

The server (RESTapi) part of the todo application. The server is built in node with expressjs and typescript.
The server consists of a few routes, a controller, a model and the storage.
This approach makes it easier to switch the storage for example a database, add handling for different models and controlles for using reminders etc.

A request is received by the server and is referred to the todoController by the routes.
The todoController handles the request by validating incoming data.

If the data is invalid a 4xx status is sent back.

If the data passes the validation the todoController then tells the todoModel to perform the requested operation on the todos in storage.

## Architecture

request --> routes --> controller --> model --> storage

## File structure

/controllers - The controllers implements the main logic such as handling requests and responses, validation
/models - The models implements logic for loading the storage, updating the todos and saving to storage
/storage - A single .json file storing all todos
index - The request routes

## Getting Started

1. run the command "npm install" to install all dependencies
2. run the command "npm run dev" to start the server at port 8000
