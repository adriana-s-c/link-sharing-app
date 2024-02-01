import styles from "./index.module.scss";
import { Text } from "../../../components/Text";
import { Stack } from "../../../components/Stack";
import { ReactComponent as LinkIcon } from "../../../images/icon-link-copied-to-clipboard.svg";
import useDeviceType from "../../../components/useDeviceType";
import clsx from "clsx";

export function CopyLinkMessage() {
  const { isMobile } = useDeviceType();

  return (
    <Stack
      className={clsx(styles.box, { [styles.mobile]: isMobile })}
      gap="8px"
      align={isMobile ? "center" : "start"}
    >
      <LinkIcon />
      <Text color="white" type="heading" size="s">
        The link has been copied to your clipboard!
      </Text>
    </Stack>
  );
}
