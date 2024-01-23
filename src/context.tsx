import * as React from "react";

export type Option = {
  icon?: JSX.Element;
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
  const [userLinkData, setUserLinkData] = React.useState<Option[]>(() => {
    const storedUserLinkData = localStorage.getItem("links");
    return storedUserLinkData ? JSON.parse(storedUserLinkData) : [];
  });

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
      value: "GitHub",
      placeholder: "e.g. https://www.github.com/johnappleseed",
      website: "github.com",
    },
    {
      value: "Facebook",
      placeholder: "e.g. https://www.facebook.com/John.Appleseed",
      website: "facebook.com",
    },
    {
      value: "LinkedIn",
      placeholder: "e.g. https://www.linkedin.com/in/john-appleseed/",
      website: "linkedin.com",
    },
    {
      value: "YouTube",
      placeholder: "e.g. https://www.youtube.com/@John_Appleseed",
      website: "youtube.com",
    },
    {
      value: "GitLab",
      placeholder: "e.g. https://www.gitlab.com/johnappleseed",
      website: "gitlab.com",
    },
    {
      value: "Frontend Mentor",
      placeholder: "e.g. https://www.frontendmentor.io/profile/john-appleseed",
      website: "frontendmentor.io",
    },
    {
      value: "Dev.to",
      placeholder: "e.g. https://dev.to/john-appleseed",
      website: "dev.to",
    },
    {
      value: "Twitter",
      placeholder: "e.g https://twitter.com/JohnAppleseed",
      website: "twitter.com",
    },
    {
      value: "Codewars",
      placeholder: "e.g. https://www.codewars.com/users/johnappleseed",
      website: "codewars.com",
    },
    {
      value: "freeCodeCamp",
      placeholder: "e.g. https://www.freecodecamp.org/johnappleseed",
      website: "freecodecamp.org",
    },
    {
      value: "Hashnode",
      placeholder: "e.g. https://hashnode.com/john.appleseed",
      website: "hashnode.com/",
    },
    {
      value: "Stack Overflow",
      placeholder: "e.g. https://stackoverflow.com/users/johnappleseed",
      website: "stackoverflow.com",
    },
    {
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

export type UserDataType = {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
};

type UserContextType = {
  userData: UserDataType | null;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType | null>>;
};

const initialUserData: UserDataType | null = {
  image: "",
  firstName: "",
  lastName: "",
  email: "",
};

const UserContext = React.createContext<UserContextType>({
  userData: initialUserData,
  setUserData: () => {},
});

export const useUserContext = () => React.useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = React.useState<UserDataType | null>(() => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : initialUserData;
  });
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
