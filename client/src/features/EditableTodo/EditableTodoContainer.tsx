import { EditableTodo, NewTodoInterface } from './EditableTodo';
import * as IF from '../../interfaces';
import { ReactElement, useState } from 'react';

interface EditableTodoProps {
  title: IF.Todo['title'];
  description: IF.Todo['description'];
  completed: IF.Todo['completed'];
  dueDate: IF.Todo['dueDate'];
  onComplete: (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => void;
  handleDeleteClick: () => void;
}

export const EditableTodoContainer = (
  props: EditableTodoProps,
): ReactElement => {
  const isValid = (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => Boolean(typeof title === 'string' && title.length > 0 && dueDate);

  const onComplete = (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ): boolean => {
    if (isValid(title, description, completed, dueDate)) {
      props.onComplete(title, description, completed, dueDate);
      return false;
    }
    return false;
  };

  const [newTodo, setNewTodo] = useState<NewTodoInterface>({
    title: props.title,
    description: props.description,
    completed: props.completed,
    dueDate: props.dueDate,
  });

  const handleChange = (attr: string) => (value: string | number) => {
    setNewTodo(newTodo => ({ ...newTodo, [attr]: value }));
  };

  return (
    <EditableTodo
      newTodo={newTodo}
      handleChange={handleChange}
      onComplete={onComplete}
      handleDeleteClick={props.handleDeleteClick}
    />
  );
};
