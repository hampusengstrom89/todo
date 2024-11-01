import express, { Express, Request, Response, Application } from "express";
import * as todoController from "./controllers/todoController";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  next();
});

app.get("/", todoController.todos_get);
app.get("/todos", todoController.todos_get);
app.get("/todos/:uuid", todoController.todos_get_todo);

app.post("/todos", todoController.todos_create);

app.put("/todos/:uuid", todoController.todos_update);

app.delete("/todos/:uuid", todoController.todos_delete);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
