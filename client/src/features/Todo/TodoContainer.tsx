import { Todo } from './Todo';
import { EditableTodo } from './EditableTodo';
import * as IF from '../../interfaces';
import { ReactElement, useState } from 'react';
import { useTodos } from '../../utils/providers/TodoContext';

export const TodoContainer = (todo: IF.Todo): ReactElement => {
  const { editTodo }: { editTodo: (editedTodo: IF.Todo) => void } = useTodos();
  const [isEdit, setIsEdit] = useState(false);

  const handleCheckClick = () => {
    console.log('Click check!');
    editTodo({ ...todo, completed: !todo.completed });
  };

  const handleEditClick = () => {
    console.log('Click edit!');
    setIsEdit(true);
  };

  const handleEditDoneClick = (editedTodo: IF.Todo) => {
    console.log('Click edit done!');

    editTodo(editedTodo);
    setIsEdit(false);
  };

  return isEdit ? (
    <EditableTodo todo={todo} handleEditDoneClick={handleEditDoneClick} />
  ) : (
    <Todo
      todo={todo}
      handleCheckClick={handleCheckClick}
      handleEditClick={handleEditClick}
    />
  );
};
