import { ReactElement, useState } from 'react';
import * as IF from '../../interfaces';
import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

import * as sc from './styled';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import DateInput from '../../components/DateInput';
import { getReadableDate } from '../../utils/helpers';

const SaveButton = ({
  handleClick,
}: {
  handleClick: IF.Button['onClick'];
}): ReactElement => (
  <sc.SaveButton onClick={handleClick}>
    <FaCheck />
  </sc.SaveButton>
);

const DeleteButton = ({
  handleClick,
}: {
  handleClick: IF.Button['onClick'];
}): ReactElement => (
  <sc.DeleteButton onClick={handleClick}>
    <RiDeleteBin6Line />
  </sc.DeleteButton>
);

export const EditableTodo = ({
  title,
  description,
  completed,
  dueDate,
  onComplete,
  handleDeleteClick,
}: {
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
}): ReactElement => {
  const [newTodo, setNewTodo] = useState({
    title,
    description,
    completed,
    dueDate,
  });

  const handleDoneClick = () => {
    const { title, description, completed, dueDate } = newTodo;
    onComplete(title, description, completed, dueDate);
  };

  const handleChange = (attr: string) => (value: string | number) => {
    setNewTodo(newTodo => ({ ...newTodo, [attr]: value }));
  };

  return (
    <sc.EditableTodo $completed={completed}>
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
      <DeleteButton handleClick={handleDeleteClick} />
      <SaveButton handleClick={handleDoneClick} />
    </sc.EditableTodo>
  );
};
