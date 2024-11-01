import { ReactElement } from 'react';
import * as IF from '../../interfaces';
import { FiEdit } from 'react-icons/fi';
import { FaRegCircle } from 'react-icons/fa';

import * as sc from './styled';

const getReadableDate = (timestamp: number): string =>
  new Date(timestamp).toISOString().slice(0, 10);

const CheckButton = (props: IF.Button): ReactElement => (
  <sc.CheckButton onClick={props.handleClick}>
    <FaRegCircle />
  </sc.CheckButton>
);

const EditButton = (props: IF.Button): ReactElement => (
  <sc.EditButton onClick={props.handleClick}>
    <FiEdit />
  </sc.EditButton>
);

export const Todo = ({ todo }: { todo: IF.Todo }): ReactElement => {
  const handleCheckClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Click check!');
  };
  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Click edit!');
  };

  return (
    <sc.Todo>
      <h2>{todo.title}</h2>
      <CheckButton handleClick={handleCheckClick} />
      <EditButton handleClick={handleEditClick} />
      <time>{getReadableDate(todo.dueDate)}</time>
    </sc.Todo>
  );
};
