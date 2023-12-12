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

export const useUserLinkData = () => {
  const context = React.useContext(UserLinkDataContext);
  if (!context) {
    throw new Error(
      "useUserLinkData must be used within a UserLinkDataProvider"
    );
  }
  return context;
};

export const UserLinkDataContext = React.createContext<{
  userLinkData: Option[];
  setUserLinkData: React.Dispatch<React.SetStateAction<Option[]>>;
}>({
  userLinkData: [],
  setUserLinkData: () => {},
});

export const UserLinkDataProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [userLinkData, setUserLinkData] = React.useState<Option[]>([]);

  return (
    <UserLinkDataContext.Provider value={{ userLinkData, setUserLinkData }}>
      {children}
    </UserLinkDataContext.Provider>
  );
};

type OptionsContextType = {
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
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
    { icon: <FrontendMentor />, value: "Frontend Mentor" },
    { icon: <Devto />, value: "Devto" },
    { icon: <Twitter />, value: "Twitter" },
    { icon: <Codewars />, value: "Codewars" },
    { icon: <FreeCodeCamp />, value: "FreeCodeCamp" },
    { icon: <Hashnode />, value: "Hashnode" },
    { icon: <StackOverflow />, value: "StackOverflow" },
    { icon: <Twitch />, value: "Twitch" },
  ];

  const [options, setOptions] = React.useState<Option[]>(initialOptions);

  const contextValue: OptionsContextType = {
    options,
    setOptions,
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
