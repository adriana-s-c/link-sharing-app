import styles from "./index.module.scss";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { SaveDivider } from "../SaveComponent";
import { ProfileDetailsForm } from "./ProfileDetailsForm";
import { ProfilePicture } from "./ProfilePicture";
import { useUserContext } from "../../../context";

export function ProfileDetails() {
  const { userData, setUserData } = useUserContext();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form data submitted:", data);
    setUserData(data);
  };

  return (
    <Stack orientation="vertical" className={styles.fullHeight}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack orientation="vertical" className={styles.box}>
          <Stack orientation="vertical" gap="40px">
            <Stack orientation="vertical" gap="16px">
              <Text type="heading" size="m">
                Profile Details
              </Text>
              <Text type="body" size="m" color="grey">
                Add your details to create a personal touch to your profile.
              </Text>
            </Stack>
            <Stack orientation="vertical" gap="12px">
              <ProfilePicture />
              <ProfileDetailsForm errors={errors} control={control} />
            </Stack>
          </Stack>
        </Stack>
        <SaveDivider />
      </form>
    </Stack>
  );
}
