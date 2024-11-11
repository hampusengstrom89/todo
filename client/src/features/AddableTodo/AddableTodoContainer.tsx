import { useState } from 'react';
import EditableTodo from '../EditableTodo';
import { useTodos } from '../../utils/providers/TodoContext';
import * as IF from '../Todo/interface';
import * as sc from './styled';
import { IoMdAddCircleOutline } from 'react-icons/io';

const todoTemplate = {
  title: '',
  description: '',
  dueDate: new Date().getTime(),
  completed: false,
};

export const AddableTodoContainer = () => {
  const {
    addTodo,
  }: {
    addTodo: (todoDraft: IF.TodoDraft) => void;
  } = useTodos();
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const handleComplete = (todoDraft: IF.TodoDraft): void => {
    addTodo({
      ...todoDraft,
      dueDate: new Date(todoDraft.dueDate).getTime(),
    });
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
    <sc.CreateTodoButton onClick={handleCreateClick}>
      Add new Todo
      <IoMdAddCircleOutline />
    </sc.CreateTodoButton>
  );
};
