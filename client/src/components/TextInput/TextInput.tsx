import { useState } from 'react';
import * as IF from '../../interfaces';
import * as sc from './styled';

export const TextInput = (props: IF.TextInput) => {
  const [value, setValue] = useState<string>(props.value || '');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleBlur = () => props.onChange(value);

  return (
    <sc.TextInput
      type="text"
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={props.placeHolder}
      value={value}
    />
  );
};
