import { ReactElement } from 'react';
import * as IF from '../../interfaces';
import { FiEdit } from 'react-icons/fi';
import { FaRegCircle, FaCircleCheck } from 'react-icons/fa6';

import * as sc from './styled';
import { getReadableDate } from '../../utils/helpers';

const CheckButton = ({
  handleClick,
  checked,
}: {
  handleClick: IF.Button['onClick'];
  checked: boolean;
}): ReactElement => (
  <sc.CheckButton onClick={handleClick}>
    {checked ? <FaCircleCheck /> : <FaRegCircle />}
  </sc.CheckButton>
);

const EditButton = ({
  handleClick,
}: {
  handleClick: IF.Button['onClick'];
}): ReactElement => (
  <sc.EditButton onClick={handleClick}>
    <FiEdit />
  </sc.EditButton>
);

export const Todo = ({
  todo,
  handleCheckClick,
  handleEditClick,
}: {
  todo: IF.Todo;
  handleCheckClick: IF.Button['onClick'];
  handleEditClick: IF.Button['onClick'];
}): ReactElement => {
  return (
    <sc.Todo $completed={todo.completed}>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <CheckButton handleClick={handleCheckClick} checked={todo.completed} />
      <EditButton handleClick={handleEditClick} />
      <time>{getReadableDate(todo.dueDate)}</time>
    </sc.Todo>
  );
};
