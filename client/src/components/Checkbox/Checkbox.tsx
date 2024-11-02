import * as IF from '../../interfaces';
import * as sc from './styled';

export const Checkbox = (props: IF.Checkbox) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onChange(event.currentTarget.checked);
  };

  return (
    <sc.Checkbox
      type="checkbox"
      onChange={handleChange}
      placeholder={props.placeHolder}
      checked={props.checked}
    />
  );
};
