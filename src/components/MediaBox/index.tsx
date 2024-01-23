import styles from "./index.module.scss";
import clsx from "clsx";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { ReactComponent as Arrow } from "../../images/icon-arrow-right.svg";
import { ReactComponent as Github } from "../../images/icon-github.svg";
import { ReactComponent as Youtube } from "../../images/icon-youtube.svg";
import { ReactComponent as LinkedIn } from "../../images/icon-linkedin.svg";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Gitlab } from "../../images/icon-gitlab.svg";
import { ReactComponent as FrontendMentor } from "../../images/icon-frontend-mentor.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Devto } from "../../images/icon-devto.svg";
import { ReactComponent as Codewars } from "../../images/icon-codewars.svg";
import { ReactComponent as FreeCodeCamp } from "../../images/icon-freecodecamp.svg";
import { ReactComponent as Hashnode } from "../../images/icon-hashnode.svg";
import { ReactComponent as StackOverflow } from "../../images/icon-stack-overflow.svg";
import { ReactComponent as Twitch } from "../../images/icon-twitch.svg";

export function getIcon(name: string) {
  switch (name) {
    case "Github":
      return <Github className={styles.icon} />;
    case "Youtube":
      return <Youtube className={styles.icon} />;
    case "LinkedIn":
      return <LinkedIn className={styles.icon} />;
    case "Facebook":
      return <Facebook className={styles.icon} />;
    case "GitLab":
      return <Gitlab className={styles.icon} />;
    case "Frontend Mentor":
      return <FrontendMentor className={styles.icon} />;
    case "Twitter":
      return <Twitter className={styles.icon} />;
    case "Twitch":
      return <Twitch className={styles.icon} />;
    case "Devto":
      return <Devto className={styles.icon} />;
    case "Codewars":
      return <Codewars className={styles.icon} />;
    case "FreeCodeCamp":
      return <FreeCodeCamp className={styles.icon} />;
    case "Hashnode":
      return <Hashnode className={styles.icon} />;
    case "StackOverflow":
      return <StackOverflow className={styles.icon} />;
  }
}

type Props = {
  className?: string;
  name: string;
};

export function MediaBox({ name, className }: Props) {
  return (
    <Stack
      className={clsx(styles.box, name && styles[`box-${name}`], className)}
      align="center"
      spacing="between"
    >
      <Stack gap="8px" align="center">
        {getIcon(name)}
        <Text
          type="body"
          size="m"
          color={name && name === "Frontend Mentor" ? "black" : "white"}
        >
          {name}
        </Text>
      </Stack>
      <Arrow />
    </Stack>
  );
}
