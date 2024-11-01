import { ReactNode } from 'react';
import * as sc from './styled';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}
export const List = <T extends {}>({ items, renderItem }: ListProps<T>) => {
  return (
    <sc.List>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </sc.List>
  );
};
