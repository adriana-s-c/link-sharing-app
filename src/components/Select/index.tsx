import styles from "./index.module.scss";
import * as React from "react";
import { ReactComponent as Arrow } from "../../images/icon-chevron-down.svg";
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
import { Text } from "../Text";
import { Stack } from "../Stack";

type Option = {
  icon: JSX.Element;
  value: string;
};

export function Select() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<Option>({
    icon: <Github />,
    value: "Github",
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const matchingPlatform = (option: string) => option === selectedOption.value;

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

  return (
    <div>
      <Stack
        className={
          isOpen ? ` ${styles.box} ${styles[`box-isOpen`]}` : styles.box
        }
        onClick={handleToggle}
        align="center"
        spacing="between"
      >
        <Stack gap="12px" align="center">
          {selectedOption.icon &&
            React.cloneElement(selectedOption.icon, {
              className: styles.icon,
            })}
          <Text type="body" size="m">
            {selectedOption.value}
          </Text>
        </Stack>
        <Arrow className={styles.arrow} />
      </Stack>
      {isOpen && (
        <Stack orientation="vertical" className={styles.options} gap="12px">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={
                matchingPlatform(option.value)
                  ? `${styles.option} ${styles[`option-isActive`]}`
                  : styles.option
              }
            >
              <Stack gap="12px" align="center">
                {option.icon &&
                  React.cloneElement(option.icon, {
                    className: matchingPlatform(option.value)
                      ? `${styles.icon} ${styles[`icon-isActive`]}`
                      : styles.icon,
                  })}
                {option.value}
              </Stack>
            </div>
          ))}
        </Stack>
      )}
    </div>
  );
}
