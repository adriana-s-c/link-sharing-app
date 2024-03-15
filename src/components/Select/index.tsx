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
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);
  const optionRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen && focusedIndex !== null && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  React.useEffect(() => {
    if (isOpen) {
      setFocusedIndex(null);
    }
  }, [isOpen]);

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const isHeaderFocused = document.activeElement === headerRef.current;

    if (isHeaderFocused) {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(false);
        return;
      }
    }
    if (!isOpen) {
      if (
        e.key === "Enter" ||
        e.key === " " ||
        e.key === "ArrowDown" ||
        e.key === "ArrowUp"
      ) {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prevIndex) => {
          const nextIndex = prevIndex !== null ? prevIndex + 1 : 0;
          return nextIndex < options.length ? nextIndex : prevIndex;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prevIndex) => {
          if (prevIndex === 0 || prevIndex === null) {
            headerRef.current?.focus();
            return null;
          } else {
            return (prevIndex - 1 + options.length) % options.length;
          }
        });
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex !== null && setSelectedOption) {
          setSelectedOption(options[focusedIndex]);
          setIsOpen(false);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
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

  if (optionRefs.current.length !== options.length) {
    optionRefs.current = Array(options.length).fill(null);
  }

  return (
    <div
      className={`${styles.relative} custom-select`}
      ref={selectRef}
      tabIndex={0}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={isOpen ? "true" : "false"}
      aria-owns="optionsList"
      aria-controls="optionsList"
      onKeyDown={handleKeyDown}
    >
      <Stack
        className={
          isOpen ? ` ${styles.box} ${styles[`box-isOpen`]}` : styles.box
        }
        onClick={handleToggle}
        align="center"
        spacing="between"
        ref={headerRef}
        tabIndex={-1}
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
          {options.map((option, index) => {
            const isActive = isSelectedOption(option.value);
            return (
              <OptionItem
                key={option.value}
                ref={(el) => (optionRefs.current[index] = el)}
                icon={GetIcon({ name: option.value, color: "white" })}
                value={option.value}
                isActive={isActive}
                onClick={() => handleOptionClick(option)}
              />
            );
          })}
        </Stack>
      )}
    </div>
  );
}
