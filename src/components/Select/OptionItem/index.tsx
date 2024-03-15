import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../Stack/";

type OptionItemProps = {
  icon: any;
  value: string;
  isActive: boolean;
  onClick: () => void;
};

export const OptionItem = React.forwardRef<HTMLDivElement, OptionItemProps>(
  (props, ref) => {
    const { icon, value, isActive, onClick } = props;

    return (
      <div
        tabIndex={0}
        ref={ref}
        role="option"
        key={value}
        aria-selected={isActive ? "true" : "false"}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
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
);

OptionItem.displayName = "OptionItem";
