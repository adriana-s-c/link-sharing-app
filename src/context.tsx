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
  placeholder: string;
  link?: string;
  website?: string;
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
    {
      icon: <Github />,
      value: "Github",
      placeholder: "e.g. https://www.github.com/johnappleseed",
      website: "github.com",
    },
    {
      icon: <Facebook />,
      value: "Facebook",
      placeholder: "e.g. https://www.facebook.com/John.Appleseed",
      website: "facebook.com",
    },
    {
      icon: <LinkedIn />,
      value: "LinkedIn",
      placeholder: "e.g. https://www.linkedin.com/in/john-appleseed/",
      website: "linkedin.com",
    },
    {
      icon: <Youtube />,
      value: "Youtube",
      placeholder: "e.g. https://www.youtube.com/@John_Appleseed",
      website: "youtube.com",
    },
    {
      icon: <Gitlab />,
      value: "GitLab",
      placeholder: "e.g. https://www.gitlab.com/johnappleseed",
      website: "gitlab.com",
    },
    {
      icon: <FrontendMentor />,
      value: "Frontend Mentor",
      placeholder: "e.g. https://www.frontendmentor.io/profile/john-appleseed",
      website: "frontendmentor.io",
    },
    {
      icon: <Devto />,
      value: "Devto",
      placeholder: "e.g. https://dev.to/john-appleseed",
      website: "dev.to",
    },
    {
      icon: <Twitter />,
      value: "Twitter",
      placeholder: "e.g https://twitter.com/JohnAppleseed",
      website: "twitter.com",
    },
    {
      icon: <Codewars />,
      value: "Codewars",
      placeholder: "e.g. https://www.codewars.com/users/johnappleseed",
      website: "codewars.com",
    },
    {
      icon: <FreeCodeCamp />,
      value: "FreeCodeCamp",
      placeholder: "e.g. https://www.freecodecamp.org/johnappleseed",
      website: "freecodecamp.org",
    },
    {
      icon: <Hashnode />,
      value: "Hashnode",
      placeholder: "e.g. https://hashnode.com/john.appleseed",
      website: "hashnode.com/",
    },
    {
      icon: <StackOverflow />,
      value: "StackOverflow",
      placeholder: "e.g. https://stackoverflow.com/users/johnappleseed",
      website: "stackoverflow.com",
    },
    {
      icon: <Twitch />,
      value: "Twitch",
      placeholder: "e.g. https://www.twitch.tv/johnappleseed",
      website: "twitch.tv",
    },
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
