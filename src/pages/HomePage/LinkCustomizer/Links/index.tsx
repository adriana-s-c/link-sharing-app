import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../components/Stack";
import { AddLink } from "./AddLink";
import { useOptions, Option } from "../../../../context";

interface Props {
  addLinkQuantity: number;
  selectedPlatforms: any;
  setSelectedPlatforms: any;
}

export function Links({
  addLinkQuantity,
  selectedPlatforms,
  setSelectedPlatforms,
}: Props) {
  const { options } = useOptions();

  const handleOptionChange = (index: number, option: Option) => {
    const newSelectedOptions = [...selectedPlatforms];
    newSelectedOptions[index] = option;
    setSelectedPlatforms(newSelectedOptions);
  };

  return (
    <Stack orientation="vertical" className={styles.box} gap="24px">
      {Array.from({ length: addLinkQuantity }).map((_, index) => (
        <AddLink
          key={index}
          index={index}
          options={options.filter(
            (option) =>
              !selectedPlatforms.some((opt: any) => opt.value === option.value)
          )}
          onSelectChange={(option: Option) => handleOptionChange(index, option)}
        />
      ))}
    </Stack>
  );
}
