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
    case "Gitlab":
      return <Gitlab className={styles.icon} />;
    case "FrontendMentor":
      return <FrontendMentor className={styles.icon} />;
    case "Twitter":
      return <Twitter className={styles.icon} />;
    case "Twitch":
      return <Twitch className={styles.icon} />;
    case "Devto":
      return <Devto className={styles.icon} />;
    case "Codewars":
      return <Codewars className={styles.icon} />;
    case "freeCodeCamp":
      return <FreeCodeCamp className={styles.icon} />;
    case "Hashnode":
      return <Hashnode className={styles.icon} />;
    case "StackOverflow":
      return <StackOverflow className={styles.icon} />;
  }
}

type Props = {
  name:
    | "Github"
    | "Youtube"
    | "LinkedIn"
    | "Gitlab"
    | "Facebook"
    | "FrontendMentor"
    | "Twitter"
    | "Twitch"
    | "Devto"
    | "Codewars"
    | "freeCodeCamp"
    | "Hashnode"
    | "StackOverflow";
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
        <Text
          type="body"
          size="m"
          color={name && name === "FrontendMentor" ? "black" : "white"}
        >
          {name}
        </Text>
      </Stack>
      <Arrow />
    </Stack>
  );
}
