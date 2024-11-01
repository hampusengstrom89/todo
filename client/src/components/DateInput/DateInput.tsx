import { useState } from 'react';
import * as IF from '../../interfaces';
import * as sc from './styled';

export const DateInput = (props: IF.DateInput) => {
  const [value, setValue] = useState<string>(props.value || '');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    debugger;
    setValue(event.currentTarget.value);
  };

  const handleBlur = () => props.onChange(value);

  return (
    <sc.DateInput
      type="date"
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
    />
  );
};
