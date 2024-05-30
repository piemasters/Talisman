import { cn } from "../../util/cn";

const CoreStyles = {
  Base: [
    "inline-flex items-center justify-center relative isolate shadow-sm gap-x-2",
  ],
  Disabled: [
    "disabled:opacity-50 before:disabled:shadow-none after:disabled:shadow-none",
  ],
};

const SizeStyles = {
  XS: "px-2 py-1 text-xs rounded",
  SM: "px-2 py-1 text-sm rounded",
  MD: "px-2.5 py-1.5 text-sm rounded-md",
  LG: "px-3 py-2 text-sm rounded-md",
  XL: "px-3.5 py-2.5 text-sm rounded-md",
};

const CircularStyles = {
  XS: "rounded-full p-0.5",
  SM: "rounded-full p-1",
  MD: "rounded-full p-1.5",
  LG: "rounded-full p-2",
  XL: "rounded-full p-2.5",
};

const RoundedStyles = {
  XS: "rounded-full px-2.5 py-1",
  SM: "rounded-full px-2.5 py-1",
  MD: "rounded-full px-3 py-1.5",
  LG: "rounded-full px-3.5 py-2",
  XL: "rounded-full px-4 py-2.5",
};

const ColorStyles = {
  Primary: [
    "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600",
    "dark:text-white dark:bg-indigo-500 hover:dark:bg-indigo-400 focus-visible:dark:outline-indigo-500",
  ],
  Secondary: [
    "text-gray-900 bg-white hover:bg-gray-50 ring-gray-300",
    "dark:text-white dark: bg-white/10 hover:dark:bg-white/20",
  ],
  Soft: [
    "text-indigo-600 bg-indigo-50 hover:bg-indigo-100",
    "dark:text-indigo-200 dark:bg-indigo-900 hover:dark:bg-indigo-800",
  ],
};

const VariantStyles = {
  Primary: [
    "font-semibold",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  ],
  Secondary: ["font-normal ring-1 ring-inset"],
  Soft: ["font-semibold"],
};

export const Styles = {
  Circular: CircularStyles,
  Color: ColorStyles,
  Core: CoreStyles,
  Rounded: RoundedStyles,
  Size: SizeStyles,
};

export const Variants = {
  Primary: cn(
    CoreStyles.Base,
    CoreStyles.Disabled,
    VariantStyles.Primary,
    ColorStyles.Primary,
  ),
  Secondary: cn(
    CoreStyles.Base,
    CoreStyles.Disabled,
    VariantStyles.Secondary,
    ColorStyles.Secondary,
  ),
  Soft: cn(
    CoreStyles.Base,
    CoreStyles.Disabled,
    VariantStyles.Soft,
    ColorStyles.Soft,
  ),
};
