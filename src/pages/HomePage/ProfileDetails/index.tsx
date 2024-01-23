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
  const [profilePicture, setProfilePicture] = React.useState<
    HTMLCanvasElement | string | undefined | any
  >((userData && userData.image) ?? undefined);
  const [isEditorActive, setIsEditorActive] = React.useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      ...data,
      image: profilePicture,
    }));
  };

  React.useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [setUserData]);

  React.useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

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
              <ProfilePicture
                profilePicture={profilePicture}
                setProfilePicture={setProfilePicture}
                isEditorActive={isEditorActive}
                setIsEditorActive={setIsEditorActive}
              />
              <ProfileDetailsForm errors={errors} control={control} />
            </Stack>
          </Stack>
        </Stack>
        <SaveDivider disabled={isEditorActive} />
      </form>
    </Stack>
  );
}
