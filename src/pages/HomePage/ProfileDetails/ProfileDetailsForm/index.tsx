import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../components/Stack";
import { Input } from "../../../../components/Input";
import { Controller } from "react-hook-form";
import useDeviceType from "../../../../components/useDeviceType";

type Props = {
  errors: any;
  control: any;
};

export function ProfileDetailsForm({ control, errors }: Props) {
  const { isMobile } = useDeviceType();

  return (
    <Stack orientation="vertical" className={styles.box} spacing="between">
      <Stack orientation="vertical" align="center" gap="16px">
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{
            required: "Can’t be empty",
          }}
          render={({ field }) => (
            <Input
              placeholder="e.g. John"
              id="firstName"
              title="First name*"
              orientation={isMobile ? "vertical" : "horizontal"}
              errors={errors}
              {...field}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{
            required: "Can’t be empty",
          }}
          render={({ field }) => (
            <Input
              placeholder="e.g. Appleseed"
              id="lastName"
              title="Last name*"
              orientation={isMobile ? "vertical" : "horizontal"}
              errors={errors}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Can’t be empty",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <Input
              placeholder="e.g. email@example.com"
              id="email"
              title="Email"
              orientation={isMobile ? "vertical" : "horizontal"}
              errors={errors}
              {...field}
            />
          )}
        />
      </Stack>
    </Stack>
  );
}
