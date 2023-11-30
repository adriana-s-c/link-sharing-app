import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { ReactComponent as Icon } from "../../../../images/icon-drag-and-drop.svg";
import { Text } from "../../../../components/Text";
import { Select } from "../../../../components/Select";
import { Input } from "../../../../components/Input";
import { ReactComponent as Github } from "../../../../images/icon-github.svg";
import { ReactComponent as Youtube } from "../../../../images/icon-youtube.svg";
import { ReactComponent as LinkedIn } from "../../../../images/icon-linkedin.svg";
import { ReactComponent as Facebook } from "../../../../images/icon-facebook.svg";
import { ReactComponent as Gitlab } from "../../../../images/icon-gitlab.svg";
import { ReactComponent as FrontendMentor } from "../../../../images/icon-frontend-mentor.svg";
import { ReactComponent as Twitter } from "../../../../images/icon-twitter.svg";
import { ReactComponent as Devto } from "../../../../images/icon-devto.svg";
import { ReactComponent as Codewars } from "../../../../images/icon-codewars.svg";
import { ReactComponent as FreeCodeCamp } from "../../../../images/icon-freecodecamp.svg";
import { ReactComponent as Hashnode } from "../../../../images/icon-hashnode.svg";
import { ReactComponent as StackOverflow } from "../../../../images/icon-stack-overflow.svg";
import { ReactComponent as Twitch } from "../../../../images/icon-twitch.svg";

const options = [
  { icon: <Github />, value: "Github" },
  { icon: <Facebook />, value: "Facebook" },
  { icon: <LinkedIn />, value: "LinkedIn" },
  { icon: <Youtube />, value: "Youtube" },
  { icon: <Gitlab />, value: "GitLab" },
  { icon: <FrontendMentor />, value: "FrontendMentor" },
  { icon: <Devto />, value: "Devto" },
  { icon: <Twitter />, value: "Twitter" },
  { icon: <Codewars />, value: "Codewars" },
  { icon: <FreeCodeCamp />, value: "FreeCodeCamp" },
  { icon: <Hashnode />, value: "Hashnode" },
  { icon: <StackOverflow />, value: "StackOverflow" },
  { icon: <Twitch />, value: "Twitch" },
];

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
        <Select options={options} />
      </Stack>
      <Input
        title="Link"
        id="link"
        icon="link"
        placeholder="e.g. https://www.github.com/johnappleseed"
      />
    </Stack>
  );
}
