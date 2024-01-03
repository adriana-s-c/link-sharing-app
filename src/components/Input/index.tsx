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
  icon: string;
  errors?: any;
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ title, name, id, icon, errors, className, ...inputProps }: Props, ref) => (
    <Stack orientation="vertical" className={styles.box} gap="1px">
      <Stack spacing="between" className={styles.center}>
        <label className={styles.title} htmlFor={id}>
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
