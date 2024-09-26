import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

export type CheckboxLabelProps = LabelHTMLAttributes<HTMLLabelElement>;
export const CheckboxLabel = ({ children }: CheckboxLabelProps) => {
  return <label>{children}</label>;
};

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  checked: boolean | "indeterminate";
  onChange: (checked: boolean | "indeterminate") => void;
  disabled?: boolean;
};

export const Checkbox = ({
  checked,
  onChange,
  disabled,
  ...rest
}: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      aria-checked={checked}
      onChange={(prev) => onChange(!prev)}
      disabled={disabled}
      {...rest}
    />
  );
};
