import * as IF from './interface';
import * as sc from './styled';

export const DateInput = (props: IF.DateInput) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onChange(
      event.currentTarget.value
        ? new Date(event.currentTarget.value).getTime()
        : null,
    );
  };

  return (
    <>
      <sc.Label htmlFor={props.label}>{props.label}</sc.Label>
      <sc.DateInput
        name={props.label}
        type="date"
        onChange={handleChange}
        value={props.value}
      />
    </>
  );
};
