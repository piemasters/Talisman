export const SizeArray = ["XS", "SM", "MD", "LG", "XL"] as const;
export type Size = (typeof SizeArray)[number];

export const VariantArray = ["Primary", "Secondary", "Soft"] as const;
export type Variant = (typeof VariantArray)[number];
