export interface TextInput {
  onChange: (value: string) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
}

export interface TextArea {
  onChange: (value: string) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
}

export interface DateInput {
  onChange: (value: string) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
}

export interface Checkbox {
  onChange: (value: boolean) => void;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
}
