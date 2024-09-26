export const VariantArray = ["Primary", "Secondary", "Soft"] as const;
export type Variant = (typeof VariantArray)[number];
