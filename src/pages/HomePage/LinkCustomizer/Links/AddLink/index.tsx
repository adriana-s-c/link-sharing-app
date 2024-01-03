import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../../components/Stack";
import { ReactComponent as Icon } from "../../../../../images/icon-drag-and-drop.svg";
import { Text } from "../../../../../components/Text";
import { Select } from "../../../../../components/Select";
import { Input } from "../../../../../components/Input";
import { Option } from "../../../../../context";
import { Controller } from "react-hook-form";

interface Props {
  index: number;
  filteredOptions: Option[];
  onSelectChange: (option: Option) => void;
  handleRemove: any;
  platform: any;
  errors: any;
  control: any;
}

export function AddLink({
  index,
  filteredOptions,
  onSelectChange,
  handleRemove,
  platform,
  errors,
  control,
}: Props) {
  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLink = event.target.value;
    onSelectChange({ ...platform, link: newLink });
  };

  const handleSelectChange = (option: Option) => {
    onSelectChange(option);
  };

  const validateLink = (value: string) => {
    return value.includes(platform.website) || "Please check the URL";
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
        <button
          onClick={() => handleRemove(platform.value)}
          className={styles.button}
        >
          <Text type="body" size="m" color="grey">
            Remove
          </Text>
        </button>
      </Stack>
      <Stack orientation="vertical">
        <Text type="body" size="s">
          Platform
        </Text>
        <Select
          options={filteredOptions}
          selectedOption={platform}
          setSelectedOption={handleSelectChange}
        />
      </Stack>
      <Controller
        name={`link${index}`}
        control={control}
        defaultValue={platform.link || ""}
        rules={{
          required: "Can’t be empty",
          validate: { validateLink },
        }}
        render={({ field }) => (
          <Input
            title="Link"
            id={`link${index}`}
            icon="link"
            placeholder={platform.placeholder}
            value={field.value}
            onChange={(e) => {
              field.onChange(e);
              handleLinkChange(e);
            }}
            errors={errors}
          />
        )}
      />
    </Stack>
  );
}
