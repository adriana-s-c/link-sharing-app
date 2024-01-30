import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import { ReactComponent as ScreenImage } from "../../../../images/illustration-empty.svg";
import useDeviceType from "../../../../components/useDeviceType";
import clsx from "clsx";

export function GetStarted() {
  const { isMobile } = useDeviceType();

  return (
    <Stack
      orientation="vertical"
      align="center"
      spacing="center"
      className={isMobile ? clsx(styles.box, styles["box-mobile"]) : styles.box}
      gap="40px"
    >
      <ScreenImage className={isMobile ? styles.iconMobile : styles.icon} />
      <Stack
        orientation="vertical"
        className={isMobile ? null : styles.textcontainer}
        gap="24px"
      >
        <Text type="heading" size="m">
          Let’s get you started
        </Text>
        <Text type="body" size="m" color="grey">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </Text>
      </Stack>
    </Stack>
  );
}
