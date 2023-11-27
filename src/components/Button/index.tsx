import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import { Stack } from "../Stack";
import { ReactComponent as LinkIcon } from "../../images/icon-link.svg";
import { ReactComponent as ProfileIcon } from "../../images/icon-profile-details-header.svg";
import { ReactComponent as UploadIcon } from "../../images/icon-upload-image.svg";

type Props = ComponentPropsWithoutRef<"button"> & {
  colorScheme: "primary" | "secondary" | "third" | "active";
  icon?: any;
  children?: ReactNode;
};

function getIcon(name: string) {
  switch (name) {
    case "link":
      return <LinkIcon className={styles.icon} />;
    case "profile":
      return <ProfileIcon className={styles.iconGrey} />;
    case "upload":
      return <UploadIcon className={styles.iconGrey} />;
  }
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      icon,
      type = "button",
      colorScheme = "primary",
      children,
      ...buttonProps
    }: Props,
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        styles.button,
        colorScheme && styles[`colorscheme-${colorScheme}`]
      )}
      {...buttonProps}
    >
      <Stack
        orientation={icon && icon === "upload" ? "vertical" : "horizontal"}
        gap="8px"
        className={styles.center}
      >
        {icon ? getIcon(icon) : null}
        {children}
      </Stack>
    </button>
  )
);
