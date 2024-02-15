import * as React from "react";
import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import { Stack } from "../Stack";
import { ReactComponent as LinkIcon } from "../../images/icon-link.svg";
import { ReactComponent as ProfileIcon } from "../../images/icon-profile-details-header.svg";
import { ReactComponent as PreviewIcon } from "../../images/icon-preview-header.svg";

type Props = ComponentPropsWithoutRef<"button"> & {
  colorScheme: "primary" | "secondary" | "third" | "chosen";
  icon?: string;
  children?: ReactNode;
  onClick?: any;
};

function getIcon(name: string) {
  switch (name) {
    case "link":
      return <LinkIcon className={styles.icon} />;
    case "profile":
      return <ProfileIcon className={styles.icon} />;
    case "preview":
      return <PreviewIcon className={styles.icon} />;
  }
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      icon,
      type = "button",
      colorScheme = "primary",
      children,
      onClick,
      ...buttonProps
    }: Props,
    ref
  ) => {
    const [isAnimating, setIsAnimating] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
      if (onClick) {
        onClick(e);
      }
      if (buttonRef.current) {
        buttonRef.current.blur();
      }
    };

    return (
      <button
        ref={buttonRef}
        type={type}
        className={clsx(
          styles.button,
          colorScheme && styles[`colorscheme-${colorScheme}`],
          { [styles.animate]: isAnimating && colorScheme === "primary" }
        )}
        onClick={handleClick}
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
    );
  }
);
