export type Field = {
  type: string;
  placeholder?: string;
  label?: string;
  title?: string;
  value?: string;
  maxLength?: number;
  disabled?: boolean;
}

export type FormFieldState = {
    name: string;
    value: string | undefined;
    error: string;
  };