import * as IF from '../../interfaces';
import * as sc from './styled';

export const Checkbox = (props: IF.Checkbox) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onChange(event.currentTarget.checked);
  };

  return (
    <>
      <sc.Label htmlFor={props.label}>{props.label}</sc.Label>
      <sc.Checkbox
        name={props.label}
        type="checkbox"
        onChange={handleChange}
        placeholder={props.placeHolder}
        checked={props.checked}
      />
    </>
  );
};
