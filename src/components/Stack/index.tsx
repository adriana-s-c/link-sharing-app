import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";
import { forwardRef } from "react";

type AlignType = "end" | "center" | "start" | "baseline";
type SpacingType =
  | "evenly"
  | "between"
  | "around"
  | "center"
  | "flexEnd"
  | "flexStart";
type OrientationType =
  | "horizontal"
  | "vertical"
  | "horizontal-reverse"
  | "vertical-reverse";

type Props = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  orientation?: OrientationType;
  align?: AlignType;
  spacing?: SpacingType;
  gap?: string;
  children: ReactNode;
};

export const Stack = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      orientation = "horizontal",
      spacing,
      align,
      gap,
      children,
      ...restProps
    }: Props,
    ref
  ) => (
    <div
      className={clsx(
        styles.flex,
        orientation && styles[`orientation-${orientation}`],
        align && styles[`align-${align}`],
        spacing && styles[`spacing-${spacing}`],
        className
      )}
      style={gap ? { gap } : {}}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  )
);
