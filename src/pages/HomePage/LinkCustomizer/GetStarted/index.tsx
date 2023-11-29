import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import { ReactComponent as ScreenImage } from "../../../../images/illustration-empty.svg";

export function GetStarted() {
  return (
    <Stack
      orientation="vertical"
      align="center"
      spacing="center"
      className={styles.box}
      gap="40px"
    >
      <Stack orientation="vertical" className={styles.textcontainer} gap="24px">
        <Text type="heading" size="m">
          Let’s get you started
        </Text>
        <Text type="body" size="m" color="grey">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </Text>
      </Stack>
      <ScreenImage />
    </Stack>
  );
}
