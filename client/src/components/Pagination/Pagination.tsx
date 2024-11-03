import { ReactElement, useState } from 'react';
import * as sc from './styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
  const [page, setPage] = useState<number>(0);

  const subItems = items.slice(page * hits, page * hits + hits);
  const numberOfPages = Math.ceil(items.length / hits);
  const pages = Array.from(Array(numberOfPages));

  return (
    <div>
      {children(subItems)}
      <sc.PaginationList>
        <sc.PaginationButton onClick={() => setPage(Math.max(page - 1, 0))}>
          <FaChevronLeft />
        </sc.PaginationButton>
        {pages.map((_, index) => (
          <sc.PaginationButton
            onClick={() => setPage(index)}
            $active={page === index}>
            {index + 1}
          </sc.PaginationButton>
        ))}

        <sc.PaginationButton
          onClick={() => setPage(Math.min(page + 1, numberOfPages - 1))}>
          <FaChevronRight />
        </sc.PaginationButton>
      </sc.PaginationList>
    </div>
  );
};
