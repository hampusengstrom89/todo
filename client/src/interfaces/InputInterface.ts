export interface TextInput {
  onChange: (value: string) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}

export interface TextArea {
  onChange: (value: string) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}

export interface DateInput {
  onChange: (value: number) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}

export interface Checkbox {
  onChange: (value: boolean) => void;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}
