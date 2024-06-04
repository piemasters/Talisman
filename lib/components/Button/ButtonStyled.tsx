import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "../../util/cn";

import { Button } from "./Button";
import * as Settings from "./settings";
import { Styles, Variants } from "./styles";

export type ButtonStyledProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  circular?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  size?: Settings.Size;
  variant?: Settings.Variant;
};

export const ButtonStyled = forwardRef<HTMLButtonElement, ButtonStyledProps>(
  (
    {
      children,
      circular = false,
      className,
      disabled = false,
      rounded = false,
      size = Settings.Size.MD,
      variant = Settings.Variant.Primary,
      ...rest
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          Styles.Size[size],
          Variants[variant],
          circular && Styles.Circular[size],
          rounded && Styles.Rounded[size],
          className,
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);
