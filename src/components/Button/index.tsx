import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";
import clsx from "clsx";

type Props = ComponentPropsWithoutRef<"button"> & {
  colorScheme: "primary" | "secondary";
  children?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      type = "button",
      colorScheme = "primary",
      children,
      ...buttonProps
    }: Props,
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        styles.button,
        colorScheme && styles[`colorscheme-${colorScheme}`]
      )}
      {...buttonProps}
    >
      {children}
    </button>
  )
);
