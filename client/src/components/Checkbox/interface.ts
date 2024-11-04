export interface Checkbox {
  onChange: (value: boolean) => void;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}
