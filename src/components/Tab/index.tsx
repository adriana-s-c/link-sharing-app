import styles from "./index.module.scss";
import * as React from "react";
import clsx from "clsx";
import { ReactComponent as LinksIcon } from "../../images/icon-link.svg";
import { ReactComponent as ProfileIcon } from "../../images/icon-profile-details-header.svg";
import { Text } from "../Text";
import { Stack } from "../Stack";
import useDeviceType from "../useDeviceType";

type Props = {
  children: React.ReactNode;
  icon?: "link" | "profile";
  colorScheme: "default" | "chosen";
};

function getIcon(name: string) {
  switch (name) {
    case "link":
      return <LinksIcon className={styles.icon} />;
    case "profile":
      return <ProfileIcon className={styles.icon} />;
    default:
      return null;
  }
}

export function Tab({ children, icon, colorScheme }: Props) {
  const { isMobile } = useDeviceType();

  return (
    <Stack
      className={clsx(styles.box, {
        [styles[`box-chosen`]]: colorScheme === "chosen",
      })}
      gap={isMobile ? "0" : "8px"}
      align="center"
    >
      {icon && getIcon(icon)}
      <Text type="heading" size="s" color="grey" className={styles.text}>
        {children}
      </Text>
    </Stack>
  );
}
