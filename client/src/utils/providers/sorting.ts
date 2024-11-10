import * as IF from '../../features/Todo/interface';

export interface SortAttribute {
  name: string;
  value: string;
}

export const sortAttributes: SortAttribute[] = [
  {
    name: 'Alphabetically',
    value: 'title',
  },
  {
    name: 'Due date',
    value: 'dueDate',
  },
];

const sortBy = (sortByAttr: SortAttribute) => (a: IF.Todo, b: IF.Todo) => {
  const attr = sortByAttr.value as keyof IF.Todo;
  if (a[attr] < b[attr]) {
    return -1;
  } else if (b[attr] === a[attr]) {
    return 0;
  } else {
    return 1;
  }
};

export const sortTodos = (sortAttr: SortAttribute, todos: IF.Todo[]) => {
  return [...todos].sort(sortBy(sortAttr));
};
