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

type GetIconProps = {
  name: string;
  color?: "white" | "grey";
};

export function GetIcon({ name, color = "grey" }: GetIconProps) {
  switch (name) {
    case "GitHub":
      return <Github className={clsx(styles.icon, styles[`icon-${color}`])} />;
    case "YouTube":
      return <Youtube className={clsx(styles.icon, styles[`icon-${color}`])} />;
    case "LinkedIn":
      return (
        <LinkedIn className={clsx(styles.icon, styles[`icon-${color}`])} />
      );
    case "Facebook":
      return (
        <Facebook className={clsx(styles.icon, styles[`icon-${color}`])} />
      );
    case "GitLab":
      return <Gitlab className={clsx(styles.icon, styles[`icon-${color}`])} />;
    case "Frontend Mentor":
      return (
        <FrontendMentor
          className={clsx(styles.icon, styles[`icon-${color}`])}
        />
      );
    case "Twitter":
      return <Twitter className={clsx(styles.icon, styles[`icon-${color}`])} />;
    case "Twitch":
      return <Twitch className={clsx(styles.icon, styles[`icon-${color}`])} />;
    case "Dev.to":
      return <Devto className={clsx(styles.icon, styles[`icon-${color}`])} />;
    case "Codewars":
      return (
        <Codewars className={clsx(styles.icon, styles[`icon-${color}`])} />
      );
    case "freeCodeCamp":
      return (
        <FreeCodeCamp className={clsx(styles.icon, styles[`icon-${color}`])} />
      );
    case "Hashnode":
      return (
        <Hashnode className={clsx(styles.icon, styles[`icon-${color}`])} />
      );
    case "Stack Overflow":
      return (
        <StackOverflow className={clsx(styles.icon, styles[`icon-${color}`])} />
      );
  }
}

type Props = {
  className?: string;
  name: string;
  link?: any;
};

export function MediaBox({ name, className, link }: Props) {
  const platformName = name.replace(/[ .]/g, "").toLowerCase();

  return (
    <Stack
      className={clsx(
        styles.box,
        name && styles[`box-${platformName}`],
        className
      )}
      align="center"
      spacing="between"
    >
      <Stack gap="8px" align="center">
        {GetIcon({ name, color: "white" })}
        <Text
          type="body"
          size="m"
          color={name && name === "Frontend Mentor" ? "black" : "white"}
        >
          {name}
        </Text>
      </Stack>
      <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
        <Arrow className={styles.arrow} />
      </a>
    </Stack>
  );
}
