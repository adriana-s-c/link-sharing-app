import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../components/Stack";
import { AddLink } from "./AddLink";
import { useOptions, Option } from "../../../../context";

interface Props {
  addLinkQuantity: number;
}

export function Links({ addLinkQuantity }: Props) {
  const { options } = useOptions();

  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

  const handleOptionChange = (index: number, option: Option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <Stack orientation="vertical" className={styles.box} gap="24px">
      {Array.from({ length: addLinkQuantity }).map((_, index) => (
        <AddLink
          key={index}
          options={options.filter(
            (option) =>
              !selectedOptions.some((opt) => opt.value === option.value)
          )}
          onSelectChange={(option: Option) => handleOptionChange(index, option)}
        />
      ))}
    </Stack>
  );
}
