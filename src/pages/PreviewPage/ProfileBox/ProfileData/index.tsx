import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import profileImg from "../../../../images/profilePic.png";

export function ProfileData() {
  return (
    <Stack
      orientation="vertical"
      gap="20px"
      align="center"
      className={styles.width}
    >
      <img src={profileImg} alt="Profile" className={styles.img} />
      <Stack orientation="vertical" gap="16px" align="center">
        <Text type="heading" size="m">
          Ben Wright
        </Text>
        <Text type="body" size="m" color="grey">
          ben@example.com
        </Text>
      </Stack>
    </Stack>
  );
}
