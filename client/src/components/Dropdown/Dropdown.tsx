import { useState } from 'react';

import * as IF from '../../interfaces';
import { FaChevronDown } from 'react-icons/fa';
import * as sc from './styled';

export const Dropdown = ({ activeOption, options, onChange }: IF.Dropdown) => {
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (newValue: string) => {
    setShow(false);
    onChange(newValue);
  };
  return (
    <sc.Dropdown $show={show}>
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
