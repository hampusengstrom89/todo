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
