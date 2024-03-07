import * as React from "react";
import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";
import clsx from "clsx";
import { Stack } from "../Stack";
import { ReactComponent as PreviewIcon } from "../../images/icon-preview-header.svg";

type Props = ComponentPropsWithoutRef<"button"> & {
  colorScheme: "primary" | "secondary" | "third" | "chosen";
  icon?: "preview";
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string;
};

function getIcon(name: string) {
  switch (name) {
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
      to,
      ...buttonProps
    }: Props,
    ref
  ) => {
    const [isAnimating, setIsAnimating] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
      if (to) {
        navigate(to);
        return;
      }
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
        <Stack gap="8px" className={styles.center}>
          {icon ? getIcon(icon) : null}
          {children}
        </Stack>
      </button>
    );
  }
);
