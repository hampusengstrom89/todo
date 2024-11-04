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
  ): void => {
    addTodo(title, description, completed, new Date(dueDate).getTime());
    setIsCreating(false);
  };

  const handleCreateClick = () => setIsCreating(true);

  const handleDeleteClick = () => setIsCreating(false);

  return isCreating ? (
    <EditableTodo
      title={todoTemplate.title}
      description={todoTemplate.description}
      completed={todoTemplate.completed}
      dueDate={todoTemplate.dueDate}
      onComplete={handleComplete}
      handleDeleteClick={handleDeleteClick}
    />
  ) : (
    <CreateTodoButton handleClick={handleCreateClick} />
  );
};
