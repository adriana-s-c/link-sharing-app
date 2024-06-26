import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../../components/Stack";
import { ReactComponent as DragIcon } from "../../../../../images/icon-drag-and-drop.svg";
import { Text } from "../../../../../components/Text";
import { Select } from "../../../../../components/Select";
import { Input } from "../../../../../components/Input";
import { Option } from "../../../../../context";
import { Controller } from "react-hook-form";
import { Control, FieldErrors } from "react-hook-form";
import { useSortable } from "@dnd-kit/sortable";

interface Props {
  index: number;
  filteredOptions: Option[];
  onSelectChange: (option: Option) => void;
  handleRemove: (value: string) => void;
  platform: Option;
  errors: FieldErrors;
  control: Control;
  id: any;
  isDragEnabled: boolean;
}

export function AddLink({
  index,
  filteredOptions,
  onSelectChange,
  handleRemove,
  platform,
  errors,
  control,
  id,
  isDragEnabled,
}: Props) {
  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLink = event.target.value;
    onSelectChange({ ...platform, link: newLink });
  };

  const { attributes, listeners } = useSortable({
    id,
    disabled: !isDragEnabled,
  });

  const handleSelectChange = (option: Option) => {
    onSelectChange(option);
  };

  const validateLink = (value: string) => {
    return value.includes(platform.website) || "Please check the URL";
  };

  const dragProps = isDragEnabled ? { ...listeners, ...attributes } : {};

  return (
    <Stack orientation="vertical" className={styles.box} gap="12px">
      <Stack
        orientation="horizontal"
        align="center"
        spacing="between"
        className={styles.fullWidth}
      >
        <Stack align="center" gap="8px">
          <div {...dragProps}>
            <DragIcon />
          </div>
          <Text type="heading" size="s" color="grey">
            Link #{index + 1}
          </Text>
        </Stack>
        <button
          onClick={() => handleRemove(platform.value)}
          className={`${styles.button} remove-button`}
        >
          <Text type="body" size="m" color="grey">
            Remove
          </Text>
        </button>
      </Stack>
      <Stack orientation="vertical" gap="8px">
        <Text type="body" size="s">
          Platform
        </Text>
        <Controller
          control={control}
          name="Platform"
          render={({ field: { onChange } }) => (
            <Select
              options={filteredOptions}
              selectedOption={platform}
              setSelectedOption={handleSelectChange}
              onChange={onChange}
            />
          )}
        />
      </Stack>
      <Controller
        name={`link-${platform.value}`}
        control={control}
        rules={{
          required: "Can’t be empty",
          validate: { validateLink },
        }}
        render={({ field }) => (
          <Input
            title="Link"
            id={`link-${platform.value}`}
            icon="link"
            placeholder={platform.placeholder}
            value={field.value || ""}
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
