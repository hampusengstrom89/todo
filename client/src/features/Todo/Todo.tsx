import { ReactElement } from 'react';
import * as IF from './interface';
import { Button as ButtonInterface } from '../../components/Button/interface';
import { FiEdit } from 'react-icons/fi';
import { FaRegCircle, FaCircleCheck } from 'react-icons/fa6';

import * as sc from './styled';
import { getReadableDate } from '../../utils/helpers';
import Card from '../../components/Card';

export const Todo = ({
  todo,
  handleCheckClick,
  handleEditClick,
}: {
  todo: IF.Todo;
  handleCheckClick: ButtonInterface['onClick'];
  handleEditClick: ButtonInterface['onClick'];
}): ReactElement => (
  <sc.Todo>
    <Card $inActive={todo.completed}>
      <>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <sc.CheckButton onClick={handleCheckClick}>
          {todo.completed ? <FaCircleCheck /> : <FaRegCircle />}
        </sc.CheckButton>
        <sc.EditButton onClick={handleEditClick}>
          <FiEdit />
        </sc.EditButton>
        <time>{getReadableDate(todo.dueDate)}</time>
      </>
    </Card>
  </sc.Todo>
);
