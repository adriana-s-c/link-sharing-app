import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Stack } from "../Stack";
import clsx from "clsx";
import { Text } from "../Text";
import { ErrorMessage } from "@hookform/error-message";

type Props = ComponentPropsWithoutRef<"input"> & {
  title: string;
  id: string;
  icon?: string;
  orientation?: "vertical" | "horizontal";
  errors?: any;
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      title,
      name,
      id,
      icon,
      errors,
      orientation = "vertical",
      className,
      ...inputProps
    }: Props,
    ref
  ) => (
    <Stack
      orientation={orientation === "vertical" ? "vertical" : "horizontal"}
      className={styles.fullWidth}
      gap="8px"
    >
      <Stack className={styles.width}>
        <label
          className={
            orientation === "vertical"
              ? styles.titleVertical
              : styles.titleHorizontal
          }
          htmlFor={id}
        >
          {title}
        </label>
      </Stack>
      <Stack orientation="horizontal" className={styles.container}>
        <input
          ref={ref}
          id={id}
          className={clsx(
            styles.input,
            icon && styles[`input-${icon}`],
            errors && errors[id] && styles[`input-error`],
            className
          )}
          {...inputProps}
        />
        {errors && (
          <ErrorMessage
            name={id}
            errors={errors}
            render={({ message }) => (
              <Text
                type="body"
                size="s"
                color="error"
                className={styles.errorMessage}
              >
                {message}
              </Text>
            )}
          />
        )}
      </Stack>
    </Stack>
  )
);
