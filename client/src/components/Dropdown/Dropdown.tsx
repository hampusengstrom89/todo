import { useEffect, useRef, useState } from 'react';

import * as IF from '../../interfaces';
import { FaChevronDown } from 'react-icons/fa';
import * as sc from './styled';

export const Dropdown = ({ activeOption, options, onChange }: IF.Dropdown) => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChange = (newValue: string) => {
    setShow(false);
    onChange(newValue);
  };
  return (
    <sc.Dropdown $show={show} ref={ref}>
      <button onClick={() => setShow(prevShow => !prevShow)}>
        {activeOption.name}
        <FaChevronDown />
      </button>
      <sc.DropdownList $show={show}>
        {options.map(option => (
          <li key={option.value}>
            <button onClick={() => handleChange(option.value)}>
              {option.name}
            </button>
          </li>
        ))}
      </sc.DropdownList>
    </sc.Dropdown>
  );
};
