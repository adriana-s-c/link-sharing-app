import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { ReactComponent as Icon } from "../../../../images/icon-drag-and-drop.svg";
import { Text } from "../../../../components/Text";
import { Select } from "../../../../components/Select";

export function AddLink() {
  return (
    <Stack orientation="vertical" className={styles.box} gap="12px">
      <Stack
        orientation="horizontal"
        align="center"
        spacing="between"
        className={styles.fullWidth}
      >
        <Stack align="center" gap="8px">
          <Icon />
          <Text type="heading" size="s" color="grey">
            Link #1
          </Text>
        </Stack>
        <Text type="body" size="m" color="grey">
          Remove
        </Text>
      </Stack>
      <Stack orientation="vertical">
        <Text type="body" size="s">
          Platform
        </Text>
        <Select />
      </Stack>
    </Stack>
  );
}
