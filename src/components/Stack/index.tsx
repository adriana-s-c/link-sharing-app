import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  orientation?:
    | "horizontal"
    | "vertical"
    | "horizontal-reverse"
    | "vertical-reverse";
  spacing?: string;
  align?: string;
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
      ...divProps
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
      {...divProps}
    >
      {children}
    </div>
  )
);
