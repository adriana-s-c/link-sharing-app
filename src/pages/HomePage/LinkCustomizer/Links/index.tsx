import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../components/Stack";
import { AddLink } from "./AddLink";
import { Option, useUserLinkData } from "../../../../context";

interface Props {
  selectedPlatforms: any;
  setSelectedPlatforms: any;
  filteredOptions: any;
  setFilteredOptions: any;
  errors: any;
  control: any;
}

export function Links({
  selectedPlatforms,
  setSelectedPlatforms,
  filteredOptions,
  errors,
  control,
}: Props) {
  const { userLinkData } = useUserLinkData();

  const handleOptionChange = (index: number, option: Option) => {
    const newSelectedOptions = [...selectedPlatforms];
    newSelectedOptions[index] = option;
    setSelectedPlatforms(newSelectedOptions);
  };

  const handleRemove = (option: any) => {
    const newSelectedPlatforms = selectedPlatforms.filter(
      (platform: any) => platform.value !== option
    );
    setSelectedPlatforms(newSelectedPlatforms);
  };

  return (
    <Stack orientation="vertical" className={styles.box} gap="24px">
      {selectedPlatforms.map((platform: any, index: any) => (
        <AddLink
          key={platform.value}
          index={index}
          platform={platform}
          filteredOptions={filteredOptions}
          onSelectChange={(option: Option) => handleOptionChange(index, option)}
          handleRemove={handleRemove}
          errors={errors}
          control={control}
        />
      ))}
    </Stack>
  );
}
