import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import { Button } from "../../../../components/Button";

export function ProfilePicture() {
  return (
    <Stack
      orientation="horizontal"
      align="center"
      className={styles.box}
      gap="24px"
    >
      <Text type="body" size="m" color="grey" className={styles.width}>
        Profile picture
      </Text>
      <Stack gap="24px" align="center">
        <div className={styles.buttonBox}>
          <Button colorScheme="active" icon="upload">
            + Upload Image
          </Button>
        </div>
        <Text type="body" size="s" color="grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </Text>
      </Stack>
    </Stack>
  );
}
