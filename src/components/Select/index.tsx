import styles from "./index.module.scss";
import * as React from "react";
import { ReactComponent as Arrow } from "../../images/icon-chevron-down.svg";
import { Text } from "../Text";
import { Stack } from "../Stack";
import { OptionItem } from "./OptionItem";
import { Option } from "../../context";

type Props = {
  options: Option[];
  selectedOption: any;
  setSelectedOption?: any;
};

export function Select({ options, selectedOption, setSelectedOption }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const isSelectedOption = (option: string) => option === selectedOption.value;

  return (
    <div className={styles.relative} ref={selectRef}>
      <Stack
        className={
          isOpen ? ` ${styles.box} ${styles[`box-isOpen`]}` : styles.box
        }
        onClick={handleToggle}
        align="center"
        spacing="between"
      >
        <Stack gap="12px" align="center">
          {selectedOption.icon &&
            React.cloneElement(selectedOption.icon, {
              className: styles.icon,
            })}
          <Text type="body" size="m">
            {selectedOption.value}
          </Text>
        </Stack>
        <Arrow className={styles.arrow} />
      </Stack>
      {isOpen && (
        <Stack orientation="vertical" className={styles.options} gap="12px">
          {options.map((option) => (
            <OptionItem
              key={option.value}
              icon={option.icon}
              value={option.value}
              isActive={isSelectedOption(option.value)}
              onClick={() => handleOptionClick(option)}
            />
          ))}
        </Stack>
      )}
    </div>
  );
}
