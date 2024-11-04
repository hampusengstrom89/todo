export interface TextArea {
  onChange: (value: string) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}
