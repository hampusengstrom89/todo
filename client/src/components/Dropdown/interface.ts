export interface DropdownOption {
  name: string;
  value: string;
}

export interface Dropdown {
  onChange: (value: string) => void;
  options: DropdownOption[];
  activeOption: DropdownOption;
  name?: string;
  disabled?: boolean;
  placeHolder?: string;
  label?: string;
}
