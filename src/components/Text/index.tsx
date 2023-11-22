import clsx from "clsx";
import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

type TextProps = ComponentPropsWithoutRef<"p"> & {
  type: "heading" | "body";
  size: "m" | "s";
  color?: string;
  className?: string;
  children?: ReactNode;
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    { type, size, children, color, className, ...textProps }: TextProps,
    ref
  ) => {
    const Element = type === "heading" ? (size === "m" ? "h2" : "h3") : "p";

    return (
      <Element
        ref={ref}
        className={clsx(
          styles.text,
          type && styles[`${type}`],
          size && styles[`${type}-${size}`],
          color && styles[`color-${color}`],
          className
        )}
        {...textProps}
      >
        {children}
      </Element>
    );
  }
);
