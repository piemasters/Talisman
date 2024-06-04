const CoreStyles = [
  "inline-flex rounded-md shadow-sm isolate",
  "[&>*]:rounded-none",
  "[&>:first-child]:rounded-l-md [&>:first-child]:-mr-px",
  "[&>:last-child]:rounded-r-md [&>:nth-child(n+3):last-child]:-ml-px",
];

const ColorStyles = {};

export const Styles = {
  Color: ColorStyles,
  Core: CoreStyles,
};

export const Variants = {};
