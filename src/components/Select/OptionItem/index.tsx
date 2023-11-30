import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../Stack/";

type OptionItemProps = {
  icon: JSX.Element;
  value: string;
  isActive: boolean;
  onClick: () => void;
};

export function OptionItem({
  icon,
  value,
  isActive,
  onClick,
}: OptionItemProps) {
  return (
    <div
      key={value}
      onClick={onClick}
      className={
        isActive
          ? `${styles.option} ${styles[`option-isActive`]}`
          : styles.option
      }
    >
      <Stack gap="12px" align="center">
        {icon &&
          React.cloneElement(icon, {
            className: isActive
              ? `${styles.icon} ${styles[`icon-isActive`]}`
              : styles.icon,
          })}
        {value}
      </Stack>
    </div>
  );
}
