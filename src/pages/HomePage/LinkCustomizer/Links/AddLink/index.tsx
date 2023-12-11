import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../../components/Stack";
import { ReactComponent as Icon } from "../../../../../images/icon-drag-and-drop.svg";
import { Text } from "../../../../../components/Text";
import { Select } from "../../../../../components/Select";
import { Input } from "../../../../../components/Input";
import {
  Option,
  UserLinkDataContext,
  useOptions,
} from "../../../../../context";

interface Props {
  index: number;
  options: Option[];
  onSelectChange: (option: Option) => void;
}

export function AddLink({ index, options, onSelectChange }: Props) {
  const [selectedOption, setSelectedOption] = React.useState<Option>(
    options[0]
  );

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLink = event.target.value;
    setSelectedOption((prevSelectedOption) => ({
      ...prevSelectedOption,
      link: newLink,
    }));
    onSelectChange({ ...selectedOption, link: newLink });
  };

  const handleSelectChange = (option: Option) => {
    onSelectChange(option);
    setSelectedOption(option);
  };

  return (
    <Stack orientation="vertical" className={styles.box} gap="12px">
      <Stack
        orientation="horizontal"
        align="center"
        spacing="between"
        className={styles.fullWidth}
      >
        <Stack align="center" gap="8px">
          <Icon />
          <Text type="heading" size="s" color="grey">
            Link #{index + 1}
          </Text>
        </Stack>
        <Text type="body" size="m" color="grey">
          Remove
        </Text>
      </Stack>
      <Stack orientation="vertical">
        <Text type="body" size="s">
          Platform
        </Text>
        <Select
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={handleSelectChange}
        />
      </Stack>
      <Input
        title="Link"
        id="link"
        icon="link"
        placeholder="e.g. https://www.github.com/johnappleseed"
        value={selectedOption.link || ""}
        onChange={handleLinkChange}
      />
    </Stack>
  );
}
