export interface DateInput {
  onChange: (value: number | null) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}
