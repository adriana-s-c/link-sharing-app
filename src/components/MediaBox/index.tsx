import styles from "./index.module.scss";
import clsx from "clsx";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { ReactComponent as Arrow } from "../../images/icon-arrow-right.svg";
import { ReactComponent as Github } from "../../images/icon-github.svg";
import { ReactComponent as Youtube } from "../../images/icon-youtube.svg";
import { ReactComponent as LinkedIn } from "../../images/icon-linkedin.svg";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";

function getIcon(name: string) {
  switch (name) {
    case "Github":
      return <Github className={styles.icon} />;
    case "Youtube":
      return <Youtube className={styles.icon} />;
    case "LinkedIn":
      return <LinkedIn className={styles.icon} />;
    case "Facebook":
      return <Facebook className={styles.icon} />;
  }
}

type Props = {
  name: "Github" | "Youtube" | "LinkedIn";
};

export function MediaBox({ name }: Props) {
  return (
    <Stack
      className={clsx(styles.box, name && styles[`box-${name}`])}
      align="center"
      spacing="between"
    >
      <Stack gap="8px" align="center">
        {getIcon(name)}
        <Text type="body" size="m" color="white">
          {name}
        </Text>
      </Stack>
      <Arrow />
    </Stack>
  );
}
