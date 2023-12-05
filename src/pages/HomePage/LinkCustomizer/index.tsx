import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { SaveDivider } from "../SaveComponent";
import { GetStarted } from "./GetStarted";
import { AddLink } from "./AddLink";
import { ReactComponent as Github } from "../../../images/icon-github.svg";
import { ReactComponent as Youtube } from "../../../images/icon-youtube.svg";
import { ReactComponent as LinkedIn } from "../../../images/icon-linkedin.svg";
import { ReactComponent as Facebook } from "../../../images/icon-facebook.svg";
import { ReactComponent as Gitlab } from "../../../images/icon-gitlab.svg";
import { ReactComponent as FrontendMentor } from "../../../images/icon-frontend-mentor.svg";
import { ReactComponent as Twitter } from "../../../images/icon-twitter.svg";
import { ReactComponent as Devto } from "../../../images/icon-devto.svg";
import { ReactComponent as Codewars } from "../../../images/icon-codewars.svg";
import { ReactComponent as FreeCodeCamp } from "../../../images/icon-freecodecamp.svg";
import { ReactComponent as Hashnode } from "../../../images/icon-hashnode.svg";
import { ReactComponent as StackOverflow } from "../../../images/icon-stack-overflow.svg";
import { ReactComponent as Twitch } from "../../../images/icon-twitch.svg";
import { UserLinkDataContext, Option } from "../../../context";

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

type UserLinkData = Option[];

export function LinkCustomizer() {
  const [selectedOption, setSelectedOption] = React.useState<Option>({
    icon: options[0].icon,
    value: options[0].value,
    link: "",
  });

  const { userLinkData, setUserLinkData } =
    React.useContext(UserLinkDataContext);

  const handleSubmit = () => {
    setUserLinkData((prevUserLinkData: UserLinkData) => [
      ...(prevUserLinkData || []),
      selectedOption,
    ]);
  };

  return (
    <Stack orientation="vertical" className={styles.fullheight}>
      <Stack orientation="vertical" className={styles.box}>
        <Stack orientation="vertical" gap="40px" className={styles.fullheight}>
          <Stack orientation="vertical" gap="16px">
            <Text type="heading" size="m">
              Customize your links
            </Text>
            <Text type="body" size="m" color="grey">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </Text>
          </Stack>
          <Stack
            orientation="vertical"
            gap="24px"
            className={styles.fullheight}
          >
            <div>
              <Button colorScheme="secondary">+ Add new link</Button>
            </div>
            {/* <GetStarted /> */}
            <AddLink
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Stack>
        </Stack>
      </Stack>
      <SaveDivider handleSubmit={handleSubmit} />
    </Stack>
  );
}
