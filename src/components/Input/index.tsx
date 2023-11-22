import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Stack } from "../Stack";
import clsx from "clsx";

type Props = ComponentPropsWithoutRef<"input"> & {
  title: string;
  id: string;
  icon: string;
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ title, name, id, icon, className, ...inputProps }: Props, ref) => (
    <Stack orientation="vertical" className={styles.box} gap="1px">
      <Stack spacing="between" className={styles.center}>
        <label className={styles.title} htmlFor={id}>
          {title}
        </label>
      </Stack>
      <Stack orientation="horizontal" className={styles.inputBox}>
        <input
          ref={ref}
          id={id}
          className={clsx(
            styles.input,
            icon && styles[`input-${icon}`],
            className
          )}
          {...inputProps}
        />
      </Stack>
    </Stack>
  )
);

// {clsx(
//   styles.flex,
//   orientation && styles[`orientation-${orientation}`],
//   align && styles[`align-${align}`],
//   spacing && styles[`spacing-${spacing}`],
//   className
// )}
