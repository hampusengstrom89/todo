import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;

export const todos_get_todos = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("NOT IMPLEMENTED: Todos get");
};

export const todos_get_todo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("NOT IMPLEMENTED: Todos get todo");
  DEFAULT_OFFSET;
  DEFAULT_LIMIT;
};

export const todos_create = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("NOT IMPLEMENTED: Todos create");
};

export const todos_update = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("NOT IMPLEMENTED: Todos create");
};

export const todos_delete = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("NOT IMPLEMENTED: Todos delete");
};
