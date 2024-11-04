import { Todo } from './Todo';
import EditableTodo from '../EditableTodo';
import * as IF from './interface';
import { ReactElement, useState } from 'react';
import { useTodos } from '../../utils/providers/TodoContext';

export const TodoContainer = (todo: IF.Todo): ReactElement => {
  const {
    editTodo,
    deleteTodo,
  }: {
    editTodo: (editedTodo: IF.Todo) => void;
    deleteTodo: (uuid: IF.Todo['uuid']) => void;
  } = useTodos();

  const [isChecked, setIsChecked] = useState<boolean>(todo.completed);
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [checkTimeout, setCheckTimeout] =
    useState<ReturnType<typeof setTimeout>>();

  const clearCheckTimeout = () => clearTimeout(checkTimeout);

  const handleCheckClick = () => {
    if (!isChecked) {
      setCheckTimeout(
        setTimeout(
          () => editTodo({ ...todo, completed: !todo.completed }),
          2000,
        ),
      );
    } else {
      clearCheckTimeout();
    }
    setIsChecked(prev => !prev);
  };

  const handleEditClick = () => setIsEdit(true);

  const handleDeleteClick = () => deleteTodo(todo.uuid);

  const handleComplete = (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => {
    editTodo({ ...todo, title, description, completed, dueDate });
    setIsEdit(false);
  };

  return isEdit ? (
    <EditableTodo
      {...todo}
      onComplete={handleComplete}
      handleDeleteClick={handleDeleteClick}
    />
  ) : (
    <Todo
      todo={{ ...todo, completed: isChecked }}
      handleCheckClick={handleCheckClick}
      handleEditClick={handleEditClick}
    />
  );
};
