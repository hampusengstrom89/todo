import { useState } from 'react';
import * as IF from './interface';
import * as sc from './styled';

export const TextInput = (props: IF.TextInput) => {
  const [value, setValue] = useState<string>(props.value || '');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    if (!props.handleChangeOnBlur) {
      props.onChange(event.currentTarget.value);
    }
  };

  const handleBlur = () => props.onChange(value);

  return (
    <>
      {props.label && <sc.Label htmlFor={props.label}>{props.label}</sc.Label>}
      <sc.TextInput
        name={props.label}
        type="text"
        onBlur={props.handleChangeOnBlur ? handleBlur : () => {}}
        onChange={handleChange}
        placeholder={props.placeHolder}
        value={value}
      />
    </>
  );
};
