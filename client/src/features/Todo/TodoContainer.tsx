import { Todo } from './Todo';
import EditableTodo from '../EditableTodo';
import * as IF from '../../interfaces';
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
  const [isEdit, setIsEdit] = useState<Boolean>(false);

  const handleCheckClick = () => {
    console.log('Click check!');
    editTodo({ ...todo, completed: !todo.completed });
  };

  const handleEditClick = () => {
    console.log('Click edit!');
    setIsEdit(true);
  };

  const handleDeleteClick = () => {
    console.log('Click delete!');
    deleteTodo(todo.uuid);
  };

  const handleComplete = (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => {
    console.log('Click edit done!');

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
      todo={todo}
      handleCheckClick={handleCheckClick}
      handleEditClick={handleEditClick}
    />
  );
};
