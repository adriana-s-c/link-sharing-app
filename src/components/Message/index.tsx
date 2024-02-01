import styles from "./index.module.scss";
import { Text } from "../Text";
import { Stack } from "../Stack";
import { ReactComponent as LinkIcon } from "../../images/icon-link-copied-to-clipboard.svg";
import { ReactComponent as SavedIcon } from "../../images/icon-changes-saved.svg";
import useDeviceType from "../useDeviceType";
import clsx from "clsx";

type Props = {
  text: string;
  type: "profile" | "preview";
};

export function Message({ text, type }: Props) {
  const { isMobile } = useDeviceType();

  return (
    <div className={clsx(styles.messagebox, { [styles.mobile]: isMobile })}>
      <Stack
        className={clsx(styles.box, { [styles.mobile]: isMobile })}
        gap="8px"
        align={isMobile ? "center" : "start"}
      >
        {type === "profile" ? (
          <SavedIcon className={styles.icon} />
        ) : (
          <LinkIcon />
        )}
        <Text color="white" type="heading" size="s">
          {text}
        </Text>
      </Stack>
    </div>
  );
}
