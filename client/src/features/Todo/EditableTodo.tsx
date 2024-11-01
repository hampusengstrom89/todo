import { ReactElement, useState } from 'react';
import * as IF from '../../interfaces';
import { FaCheck } from 'react-icons/fa';

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

export const EditableTodo = ({
  todo,
  handleEditDoneClick,
}: {
  todo: IF.Todo;
  handleEditDoneClick: (editedTodo: IF.Todo) => void;
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
      <SaveButton handleClick={handleDoneClick} />
    </sc.EditableTodo>
  );
};
