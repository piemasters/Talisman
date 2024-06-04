import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../util/cn";
import { ButtonGroup } from "./ButtonGroup";
import { Styles } from "./styles";

export type ButtonGroupStyledProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonGroupStyled = forwardRef<
  HTMLButtonElement,
  ButtonGroupStyledProps
>(({ children, ...rest }, ref) => {
  return (
    <ButtonGroup className={cn(Styles.Core, Styles.Color)} ref={ref} {...rest}>
      {children}
    </ButtonGroup>
  );
});
