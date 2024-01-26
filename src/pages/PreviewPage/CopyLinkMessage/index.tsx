import styles from "./index.module.scss";
import { Text } from "../../../components/Text";
import { Stack } from "../../../components/Stack";
import { ReactComponent as LinkIcon } from "../../../images/icon-link-copied-to-clipboard.svg";

export function CopyLinkMessage() {
  return (
    <Stack className={styles.box} gap="8px" align="start">
      <LinkIcon />
      <Text color="white" type="heading" size="s">
        The link has been copied to your clipboard!
      </Text>
    </Stack>
  );
}
