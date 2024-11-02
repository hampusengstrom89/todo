import { useState } from 'react';
import EditableTodo from '../EditableTodo';
import { useTodos } from '../../utils/providers/TodoContext';
import * as IF from '../../interfaces';
import * as sc from './styled';
import { IoMdAddCircleOutline } from 'react-icons/io';

const todoTemplate = {
  title: '',
  description: '',
  dueDate: new Date().getTime(),
  completed: false,
};

const CreateTodoButton = ({
  handleClick,
}: {
  handleClick: IF.Button['onClick'];
}) => (
  <sc.CreateTodoButton onClick={handleClick}>
    Add new Todo
    <IoMdAddCircleOutline />
  </sc.CreateTodoButton>
);

export const AddableTodoContainer = () => {
  const {
    addTodo,
  }: {
    addTodo: (
      title: IF.Todo['title'],
      description: IF.Todo['description'],
      completed: IF.Todo['completed'],
      dueDate: IF.Todo['dueDate'],
    ) => void;
  } = useTodos();
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const handleComplete = (
    title: IF.Todo['title'],
    description: IF.Todo['description'],
    completed: IF.Todo['completed'],
    dueDate: IF.Todo['dueDate'],
  ) => {
    console.log('Click edit done!');
    addTodo(title, description, completed, new Date(dueDate).getTime());
    setIsCreating(false);
  };

  const handleCreateClick = () => {
    console.log('Click create!');
    setIsCreating(true);
  };

  const handleDeleteClick = () => {
    console.log('Click delete!');
    setIsCreating(false);
  };

  return isCreating ? (
    <EditableTodo
      {...todoTemplate}
      onComplete={handleComplete}
      handleDeleteClick={handleDeleteClick}
    />
  ) : (
    <CreateTodoButton handleClick={handleCreateClick} />
  );
};
