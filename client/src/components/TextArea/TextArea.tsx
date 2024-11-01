import { useState } from 'react';
import * as IF from '../../interfaces';
import * as sc from './styled';

export const TextArea = (props: IF.TextArea) => {
  const [value, setValue] = useState<string>(props.value || '');

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleBlur = () => props.onChange(value);

  return (
    <sc.TextArea
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={props.placeHolder}
      value={value}
    />
  );
};
