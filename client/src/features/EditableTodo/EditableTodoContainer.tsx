import { EditableTodo } from './EditableTodo';
import * as IF from '../Todo/interface';
import { ReactElement, useState } from 'react';

interface EditableTodoProps {
  title: IF.TodoDraft['title'];
  description: IF.TodoDraft['description'];
  completed: IF.TodoDraft['completed'];
  dueDate: IF.TodoDraft['dueDate'];
  onComplete: (todoDraft: IF.TodoDraft) => void;
  handleDeleteClick: () => void;
}

export const EditableTodoContainer = (
  props: EditableTodoProps,
): ReactElement => {
  const isValid = (todoDraft: IF.TodoDraft) =>
    Boolean(
      typeof todoDraft.title === 'string' &&
        todoDraft.title.length > 0 &&
        todoDraft.dueDate,
    );

  const onComplete = (todoDraft: IF.TodoDraft): boolean => {
    if (isValid(todoDraft)) {
      props.onComplete(todoDraft);
      return false;
    }
    return false;
  };

  const [newTodo, setNewTodo] = useState<IF.TodoDraft>({
    title: props.title,
    description: props.description,
    completed: props.completed,
    dueDate: props.dueDate,
  });

  const handleChange = (attr: string) => (value: string | number | null) => {
    setNewTodo((newTodo: IF.TodoDraft) => ({ ...newTodo, [attr]: value }));
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
