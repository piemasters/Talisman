import { cn } from "../../util/cn";

const CoreStyles = {
  Base: [
    "inline-flex items-center justify-center relative isolate shadow-sm gap-x-2",
    "focus-visible:z-10",
  ],
  Disabled: ["disabled:opacity-50"],
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
    "text-white dark:text-white bg-indigo-600 dark:bg-indigo-500",
    "hover:bg-indigo-500 hover:dark:bg-indigo-400",
    "active:bg-indigo-400 active:dark:bg-indigo-300",
    "ring-indigo-600 dark:ring-indigo-500",
  ],
  Secondary: [
    "text-gray-900 dark:text-white bg-white dark: bg-white/10",
    "hover:bg-gray-50 hover:dark:bg-white/20",
    "active:bg-gray-100 active:dark:bg-white/30",
    "ring-gray-300 dark:ring-gray-500 focus-visible:ring-gray-600 focus-visible:dark:ring-gray-300",
  ],
  Soft: [
    "text-indigo-600 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-900",
    "hover:bg-indigo-100 hover:dark:bg-indigo-800",
    "active:bg-indigo-200 active:dark:bg-indigo-700",
    "ring-indigo-600 dark:ring-indigo-400",
  ],
};

const VariantStyles = {
  Primary: [
    "font-semibold",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  ],
  Secondary: [
    "font-normal",
    "focus-visible:outline-none ring-1 focus-visible:ring-2 ring-inset",
  ],
  Soft: ["font-semibold", "focus-visible:outline-none focus-visible:ring-2"],
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
