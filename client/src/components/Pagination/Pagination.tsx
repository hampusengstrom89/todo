import { ReactElement, useEffect, useState } from 'react';
import * as sc from './styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const getPages = (activePage: number, numberOfPages: number) => [
  ...new Set(
    [activePage - 1, activePage, activePage + 1].filter(
      page => page > 0 && page < numberOfPages - 1,
    ),
  ),
];

interface PaginationProps<T> {
  items: T[];
  hits: number;
  children: (items: T[]) => ReactElement;
}

export const Pagination = <T extends {}>({
  items,
  hits,
  children,
}: PaginationProps<T>) => {
  const [activePage, setActivePage] = useState<number>(0);

  const subItems = items.slice(activePage * hits, activePage * hits + hits);
  const numberOfPages = Math.ceil(items.length / hits);
  const lastPage = Math.min(activePage + 1, numberOfPages - 1);
  const pages = getPages(activePage, numberOfPages);

  useEffect(() => setActivePage(0), [items]);

  return (
    <>
      {children(subItems)}
      <sc.PaginationList>
        <sc.PaginationItem>
          <button onClick={() => setActivePage(Math.max(activePage - 1, 0))}>
            <FaChevronLeft />
          </button>
        </sc.PaginationItem>

        <sc.PaginationItem data-active={activePage === 0}>
          <button onClick={() => setActivePage(0)}>1</button>
        </sc.PaginationItem>

        {activePage > 2 && <sc.PaginationItem>...</sc.PaginationItem>}

        {pages.map(page => (
          <sc.PaginationItem key={page} data-active={activePage === page}>
            <button onClick={() => setActivePage(page)}>{page + 1}</button>
          </sc.PaginationItem>
        ))}

        {activePage < numberOfPages - 3 && (
          <sc.PaginationItem>...</sc.PaginationItem>
        )}

        {numberOfPages > 1 && (
          <sc.PaginationItem data-active={activePage === numberOfPages - 1}>
            <button onClick={() => setActivePage(numberOfPages - 1)}>
              {numberOfPages}
            </button>
          </sc.PaginationItem>
        )}

        <sc.PaginationItem>
          <button onClick={() => setActivePage(lastPage)}>
            <FaChevronRight />
          </button>
        </sc.PaginationItem>
      </sc.PaginationList>
    </>
  );
};
