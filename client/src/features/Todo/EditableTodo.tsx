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
  todo,
  handleEditDoneClick,
  handleDeleteClick,
}: {
  todo: IF.Todo;
  handleEditDoneClick: (editedTodo: IF.Todo) => void;
  handleDeleteClick: () => void;
}): ReactElement => {
  const [newTodo, setNewTodo] = useState({ ...todo });

  const handleDoneClick = () => {
    handleEditDoneClick(newTodo);
  };

  const handleChange = (attr: string) => (value: string) => {
    setNewTodo(newTodo => ({ ...newTodo, [attr]: value }));
  };

  return (
    <sc.EditableTodo $completed={todo.completed}>
      <TextInput
        onChange={handleChange('title')}
        value={newTodo.title}
        placeHolder={'Enter a title'}
      />
      <TextArea
        onChange={handleChange('description')}
        value={newTodo.description}
        placeHolder={'Enter a description'}
      />
      <DateInput
        onChange={handleChange('description')}
        value={getReadableDate(newTodo.dueDate)}
      />
      <DeleteButton handleClick={handleDeleteClick} />
      <SaveButton handleClick={handleDoneClick} />
    </sc.EditableTodo>
  );
};
