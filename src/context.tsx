import * as React from "react";

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
