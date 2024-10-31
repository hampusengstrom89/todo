import { ReactElement } from 'react';
import { IFTodo } from '../../interfaces/TodoInterface';
import { FiEdit } from 'react-icons/fi';
import * as sc from './styled';

const getReadableDate = (timestamp: number): string =>
  new Date(timestamp).toISOString().slice(0, 10);

export const Todo = ({ todo }: { todo: IFTodo }): ReactElement => {
  return (
    <sc.Todo>
      <h2>{todo.title}</h2>
      <button>
        <FiEdit />
      </button>
      <time>{getReadableDate(todo.dueDate)}</time>
    </sc.Todo>
  );
};
