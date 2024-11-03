import { ReactNode } from 'react';
import * as sc from './styled';

interface ListProps<T> {
  items: T[];
  children: (item: T) => ReactNode;
}

export const List = <T extends {}>({ items, children }: ListProps<T>) => (
  <sc.List>{items.map(item => children(item))}</sc.List>
);
