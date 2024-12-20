import { NextFunction, Request, Response } from "express";
import * as Todo from "../models/todoModel";
import { v4 as uuidv4 } from "uuid";
import * as IF from "../interfaces";

export const todos_get = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const todos: IF.Todo[] = Todo.getTodos();

  res.status(200).json({ payload: todos });
};

export const todos_get_todo = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const uuid: string = req.params.uuid as string;

  if (!uuid) {
    res.status(400).json({ error: "missing uuid" });
    return;
  }

  const todo: IF.Todo | null = Todo.getTodo(uuid);

  if (todo === null) {
    res.status(404).json({ error: "todo item not found" });
  } else {
    res.status(200).json({ payload: todo });
  }
};

export const todos_create = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const title: string = req.body.title as string;
  const description: string = req.body.description as string;
  const completed: boolean = req.body.completed === "true" || false;
  const dueDate: number = parseInt(req.body.dueDate as string);

  if (!title || !dueDate) {
    res.status(400).json({ error: "missing information" });
    return;
  }

  const uuid = uuidv4();

  const todo: IF.Todo | null = Todo.createTodo({
    uuid,
    title,
    description,
    completed,
    dueDate,
  });

  res.status(200).json({ payload: todo });
};

export const todos_update = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const uuid: string = req.params.uuid as string;
  const title: string = (req.body.title as string) || "";
  const description: string = (req.body.description as string) || "";
  const completed: boolean = (req.body.completed as boolean) || false;
  const dueDate: number = req.body.dueDate as number;

  if (!uuid || !title || !dueDate) {
    res.status(400).json({ error: "missing information" });
    return;
  }

  const todo: IF.Todo | null = Todo.updateTodo(uuid, {
    uuid,
    title,
    description,
    completed,
    dueDate,
  });

  if (todo === null) {
    res.status(404).json({ error: "todo item not found" });
  } else {
    res.status(200).json({ payload: todo });
  }
};

export const todos_delete = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const uuid: string = req.params.uuid as string;

  if (!uuid) {
    res.send(400).json({ error: "missing uuid" });
    return;
  }

  const todo: IF.Todo | null = Todo.removeTodo(uuid);

  if (todo === null) {
    res.status(404).json({ error: "todo item not found" });
  } else {
    res.status(200).json({ payload: todo });
  }
};
