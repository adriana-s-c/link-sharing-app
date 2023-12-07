import * as React from "react";
import { ReactComponent as Github } from "./images/icon-github.svg";
import { ReactComponent as Youtube } from "./images/icon-youtube.svg";
import { ReactComponent as LinkedIn } from "./images/icon-linkedin.svg";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Gitlab } from "./images/icon-gitlab.svg";
import { ReactComponent as FrontendMentor } from "./images/icon-frontend-mentor.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Devto } from "./images/icon-devto.svg";
import { ReactComponent as Codewars } from "./images/icon-codewars.svg";
import { ReactComponent as FreeCodeCamp } from "./images/icon-freecodecamp.svg";
import { ReactComponent as Hashnode } from "./images/icon-hashnode.svg";
import { ReactComponent as StackOverflow } from "./images/icon-stack-overflow.svg";
import { ReactComponent as Twitch } from "./images/icon-twitch.svg";

export type Option = {
  icon: JSX.Element;
  value: string;
  link?: string;
};

export const UserLinkDataContext = React.createContext<{
  userLinkData: Option[];
  setUserLinkData: React.Dispatch<React.SetStateAction<Option[]>>;
}>({
  userLinkData: [],
  setUserLinkData: () => {},
});

type OptionsContextType = {
  options: Option[];
  selectedOption: Option;
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  setSelectedOption: React.Dispatch<React.SetStateAction<Option>>;
};

export const OptionsContext = React.createContext<
  OptionsContextType | undefined
>(undefined);

export const OptionsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialOptions: Option[] = [
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

  const [options, setOptions] = React.useState<Option[]>(initialOptions);
  const [selectedOption, setSelectedOption] = React.useState<Option>(
    initialOptions[0]
  );

  const contextValue: OptionsContextType = {
    options,
    selectedOption,
    setOptions,
    setSelectedOption,
  };

  return (
    <OptionsContext.Provider value={contextValue}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = () => {
  const context = React.useContext(OptionsContext);
  if (!context) {
    throw new Error("useOptions must be used within an OptionsProvider");
  }
  return context;
};
