import { InputHTMLAttributes } from "react";
import { cn } from "../../util/cn";

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="control"
      {...props}
      className={cn(
        className,

        // Basic groups
        "space-y-3",

        // With descriptions
        "has-[[data-slot=description]]:space-y-6 [&_[data-slot=label]]:has-[[data-slot=description]]:font-medium",
      )}
    />
  );
}

export type CheckboxFieldProps = InputHTMLAttributes<HTMLInputElement>;

export function CheckboxField({ className, ...props }: CheckboxFieldProps) {
  return (
    // HeadlessField
    <div
      data-slot="field"
      {...props}
      className={cn(
        className,

        // Base layout
        "grid grid-cols-[1.125rem_1fr] items-center gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]",

        // Control layout
        "[&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1 [&>[data-slot=control]]:justify-self-center",

        // Label layout
        "[&>[data-slot=label]]:col-start-2 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start",

        // Description layout
        "[&>[data-slot=description]]:col-start-2 [&>[data-slot=description]]:row-start-2",

        // With description
        "[&_[data-slot=label]]:has-[[data-slot=description]]:font-medium",
      )}
    />
  );
}

const base = [
  // Basic layout
  "relative isolate flex size-[1.125rem] items-center justify-center rounded-[0.3125rem] sm:size-4",

  // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
  //   "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow",

  // Background color when checked
  "before:group-data-[checked]:bg-[--checkbox-checked-bg]",

  // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
  "dark:before:hidden",

  // Background color applied to control in dark mode
  "dark:bg-white/5 dark:group-data-[checked]:bg-[--checkbox-checked-bg]",

  // Border
  "border border-zinc-950/15 group-data-[checked]:border-transparent group-data-[checked]:group-data-[hover]:border-transparent group-data-[hover]:border-zinc-950/30 group-data-[checked]:bg-[--checkbox-checked-border]",
  "dark:border-white/15 dark:group-data-[checked]:border-white/5 dark:group-data-[checked]:group-data-[hover]:border-white/5 dark:group-data-[hover]:border-white/30",

  // Inner highlight shadow
  "after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_theme(colors.white/15%)]",
  "dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:group-data-[checked]:after:block",

  // Focus ring
  "group-data-[focus]:outline group-data-[focus]:outline-2 group-data-[focus]:outline-offset-2 group-data-[focus]:outline-blue-500",

  // Disabled state
  "group-data-[disabled]:opacity-50",
  "group-data-[disabled]:border-zinc-950/25 group-data-[disabled]:bg-zinc-950/5 group-data-[disabled]:[--checkbox-check:theme(colors.zinc.950/50%)] group-data-[disabled]:before:bg-transparent",
  "dark:group-data-[disabled]:border-white/20 dark:group-data-[disabled]:bg-white/[2.5%] dark:group-data-[disabled]:[--checkbox-check:theme(colors.white/50%)] dark:group-data-[disabled]:group-data-[checked]:after:hidden",

  // Forced colors mode
  "forced-colors:[--checkbox-check:HighlightText] forced-colors:[--checkbox-checked-bg:Highlight] forced-colors:group-data-[disabled]:[--checkbox-check:Highlight]",
  "dark:forced-colors:[--checkbox-check:HighlightText] dark:forced-colors:[--checkbox-checked-bg:Highlight] dark:forced-colors:group-data-[disabled]:[--checkbox-check:Highlight]",
];

const red =
  //   "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.red.600)] [--checkbox-checked-border:theme(colors.red.700/90%)]";
  "[--checkbox-check:theme(colors.white)] [--checkbox-checked-bg:theme(colors.red.600)] [--checkbox-checked-border:theme(colors.red.700/90%)]";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  checked: boolean | "indeterminate";
  onCheckedChange: (checked: boolean | "indeterminate") => void;
  disabled?: boolean;
};

export const Checkbox = ({
  className,
  checked,
  onCheckedChange,
  disabled,
  children,
  ...rest
}: CheckboxProps) => {
  return (
    //HeadlessCheckbox
    <>
      <label>
        <input
          type="checkbox"
          checked={checked}
          aria-checked={checked}
          onChange={(prev) => onCheckedChange(!prev)}
          disabled={disabled}
          className={cn(base, red)}
          {...rest}
        />
        {children}
      </label>

      <span
        data-slot="control"
        className={cn(className, "group inline-flex focus:outline-none")}
        {...rest}
      >
        <span className={cn([base, red])}>
          <svg
            className="size-4 stroke-[--checkbox-check] opacity-0 group-data-[checked]:opacity-100 sm:h-3.5 sm:w-3.5"
            viewBox="0 0 14 14"
            fill="none"
          >
            {/* Checkmark icon */}
            <path
              className="opacity-100 group-data-[indeterminate]:opacity-0"
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Indeterminate icon */}
            <path
              className="opacity-0 group-data-[indeterminate]:opacity-100"
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </>
  );
};
