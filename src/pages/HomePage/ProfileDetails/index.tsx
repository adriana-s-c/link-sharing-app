import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { SaveDivider } from "../SaveComponent";
import { ProfileDetailsForm } from "./ProfileDetailsForm";
import { ProfilePicture } from "./ProfilePicture";
import styles from "./index.module.scss";

export function ProfileDetails() {
  return (
    <Stack orientation="vertical" className={styles.fullHeight}>
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
            <ProfileDetailsForm />
          </Stack>
        </Stack>
      </Stack>
      <SaveDivider />
    </Stack>
  );
}
