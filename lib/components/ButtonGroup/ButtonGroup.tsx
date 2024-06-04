import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonGroupProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonGroup = forwardRef<HTMLButtonElement, ButtonGroupProps>(
  ({ children, ...rest }, ref) => {
    return (
      <span ref={ref} {...rest}>
        {children}
      </span>
    );
  },
);
