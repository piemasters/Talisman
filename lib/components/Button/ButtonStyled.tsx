import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../util/cn";
import { Button as Base } from "./Button";

enum Size {
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
}

enum Variant {
  Primary = "Primary",
  Secondary = "Secondary",
  Soft = "Soft",
}

export const ButtonSettings = {
  Size,
  Variant,
};

enum CircularStyle {
  XS = "rounded-full p-0.5",
  SM = "rounded-full p-1",
  MD = "rounded-full p-1.5",
  LG = "rounded-full p-2",
  XL = "rounded-full p-2.5",
}

enum CoreStyle {
  Primary = "shadow-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  Secondary = "shadow-sm ring-1 ring-inset",
  Soft = "shadow-sm font-semibold",
}

enum ColorStyle {
  Primary = "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 " +
    "dark:text-white dark:bg-indigo-500 hover:dark:bg-indigo-400 focus-visible:dark:outline-indigo-500",
  Secondary = "text-gray-900 bg-white hover:bg-gray-50 ring-gray-300 " +
    "dark:text-white dark: bg-white/10 hover:dark:bg-white/20",
  Soft = "text-indigo-600 bg-indigo-50 hover:bg-indigo-100 " +
    "dark:text-indigo-200 dark:bg-indigo-900 hover:dark:bg-indigo-800",
}

enum SizeStyle {
  XS = "px-2 py-1 text-xs rounded",
  SM = "px-2 py-1 text-sm rounded",
  MD = "px-2.5 py-1.5 text-sm rounded-md",
  LG = "px-3 py-2 text-sm rounded-md",
  XL = "px-3.5 py-2.5 text-sm rounded-md",
}

export const ButtonStyles = {
  Circular: CircularStyle,
  Color: ColorStyle,
  Core: CoreStyle,
  Size: SizeStyle,
  Variants: {
    Primary: cn(CoreStyle.Primary, ColorStyle.Primary),
    Secondary: cn(CoreStyle.Secondary, ColorStyle.Secondary),
    Soft: cn(CoreStyle.Soft, ColorStyle.Soft),
  },
};

export type ButtonStyledProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  circular?: boolean;
  variant?: Variant;
};

export const StyledButton = forwardRef<HTMLButtonElement, ButtonStyledProps>(
  (
    { children, className, size = Size.MD, circular, variant, ...rest },
    ref,
  ) => {
    return (
      <Base
        ref={ref}
        className={cn(
          ButtonStyles.Size[size],
          circular ? ButtonStyles.Circular[size] : "",
          variant ? ButtonStyles.Variants[variant] : "",
          className,
        )}
        {...rest}
      >
        {children}
      </Base>
    );
  },
);
