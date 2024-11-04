export interface TextInput {
  onChange: (value: string) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
  handleChangeOnBlur?: boolean | undefined;
}
