export interface Todo {
  uuid: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: number;
}

export interface TodoDraft {
  title: Todo['title'];
  description: Todo['description'];
  completed: Todo['completed'];
  dueDate: Todo['dueDate'];
}
