import { ReactElement, useRef } from 'react';
import * as IF from '../../interfaces';
import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

import * as sc from './styled';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import DateInput from '../../components/DateInput';
import { getReadableDate } from '../../utils/helpers';
import Card from '../../components/Card';

export interface NewTodoInterface {
  title: IF.Todo['title'];
  description: IF.Todo['description'];
  completed: IF.Todo['completed'];
  dueDate: IF.Todo['dueDate'];
}

interface EditableTodoProps {
  newTodo: NewTodoInterface;
  handleChange: (attr: string) => (value: string | number) => void;
  onComplete: (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => boolean;
  handleDeleteClick: () => void;
}

export const EditableTodo = (props: EditableTodoProps): ReactElement => {
  const $editableTodoRef = useRef<HTMLElement>(null);
  const { newTodo, handleChange, handleDeleteClick, onComplete } = props;

  const handleDoneClick = () => {
    const { title, description, completed, dueDate } = newTodo;
    const didComplete = onComplete(title, description, completed, dueDate);
    if (!didComplete) {
      $editableTodoRef.current?.classList.add('error');
      setTimeout(
        () => $editableTodoRef.current?.classList.remove('error'),
        1000,
      );
    }
  };

  return (
    <sc.EditableTodo ref={$editableTodoRef}>
      <Card $inActive={newTodo.completed}>
        <>
          <TextInput
            onChange={handleChange('title')}
            value={newTodo.title}
            placeHolder={'Enter a title'}
            handleChangeOnBlur={true}
          />
          <TextArea
            onChange={handleChange('description')}
            value={newTodo.description}
            placeHolder={'Enter a description'}
          />
          <DateInput
            onChange={handleChange('dueDate')}
            value={getReadableDate(newTodo.dueDate)}
          />

          <sc.DeleteButton onClick={handleDeleteClick}>
            <RiDeleteBin6Line />
          </sc.DeleteButton>

          <sc.SaveButton onClick={handleDoneClick}>
            <FaCheck />
          </sc.SaveButton>
        </>
      </Card>
    </sc.EditableTodo>
  );
};
