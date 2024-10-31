import { NextFunction, Request, Response } from "express";
import * as Todo from "../models/todoModel";
import { v4 as uuidv4 } from "uuid";
import { IFTodo } from "../interfaces/TodoInterface";

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;

export const todos_get = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const offset: number = parseInt(req.query.offset as string) || DEFAULT_OFFSET;
  const limit: number = parseInt(req.query.limit as string) || DEFAULT_LIMIT;

  const todos: IFTodo[] = Todo.getTodos(offset, limit);

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

  const todo: IFTodo | null = Todo.getTodo(uuid);

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
  const completed: boolean = req.body.completed === "true";
  const dueDate: number = parseInt(req.body.dueDate as string);

  if (!title || !description || !completed || !dueDate) {
    res.status(400).json({ error: "missing information" });
    return;
  }

  const uuid = uuidv4();

  const todo: IFTodo | null = Todo.createTodo({
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

  const title: string = req.body.title as string;
  const description: string = req.body.description as string;
  const completed: boolean = req.body.completed === "true";
  const dueDate: number = parseInt(req.body.dueDate as string);

  if (!uuid || !title || !description || !completed || !dueDate) {
    res.status(400).json({ error: "missing information" });
    return;
  }

  const todo: IFTodo | null = Todo.updateTodo(uuid, {
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

  const todo: IFTodo | null = Todo.removeTodo(uuid);

  if (todo === null) {
    res.status(404).json({ error: "todo item not found" });
  } else {
    res.status(200).json({ payload: todo });
  }
};
