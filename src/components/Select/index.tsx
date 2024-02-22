import styles from "./index.module.scss";
import * as React from "react";
import { ReactComponent as Arrow } from "../../images/icon-chevron-down.svg";
import { Text } from "../Text";
import { Stack } from "../Stack";
import { OptionItem } from "./OptionItem";
import { Option } from "../../context";
import { GetIcon } from "../MediaBox";

type Props = {
  options: Option[];
  selectedOption: any;
  setSelectedOption?: (option: Option) => void;
  onChange?: (option: Option) => void;
};

export function Select({
  options,
  selectedOption,
  setSelectedOption,
  onChange,
}: Props) {
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
    if (setSelectedOption) {
      setSelectedOption(option);
    }

    if (onChange) {
      onChange(option);
    }

    setIsOpen(false);
  };

  const isSelectedOption = (option: string) => option === selectedOption.value;

  return (
    <div className={`${styles.relative} custom-select`} ref={selectRef}>
      <Stack
        className={
          isOpen ? ` ${styles.box} ${styles[`box-isOpen`]}` : styles.box
        }
        onClick={handleToggle}
        align="center"
        spacing="between"
      >
        <Stack gap="12px" align="center">
          {GetIcon({ name: selectedOption.value })}
          <Text type="body" size="m">
            {selectedOption.value}
          </Text>
        </Stack>
        <Arrow className={styles.arrow} />
      </Stack>
      {isOpen && (
        <Stack
          orientation="vertical"
          className={`${styles.options} options-div`}
          gap="12px"
        >
          {options.map((option) => (
            <OptionItem
              key={option.value}
              icon={GetIcon({ name: option.value, color: "white" })}
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
