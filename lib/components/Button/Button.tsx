import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <button type="button" ref={ref} {...rest}>
        {children}
      </button>
    );
  },
);

export default Button;
