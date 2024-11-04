export interface DateInput {
  onChange: (value: number) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}
