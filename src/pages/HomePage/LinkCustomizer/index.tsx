import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { SaveDivider } from "../SaveComponent";
import { GetStarted } from "./GetStarted";
import { Option, useUserLinkData, useOptions } from "../../../context";
import { Links } from "./Links";
import { useForm } from "react-hook-form";

export function LinkCustomizer() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { options } = useOptions();
  const { setUserLinkData } = useUserLinkData();
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<Option[]>([
    options[0],
  ]);

  React.useEffect(() => {
    const updateOptions = options.filter(
      (option) =>
        !selectedPlatforms.some((opt: any) => opt.value === option.value)
    );
    setFilteredOptions(updateOptions);
  }, [options, selectedPlatforms, setFilteredOptions]);

  const onSubmit = () => {
    setUserLinkData(selectedPlatforms);
  };

  const handleAddPlatform = () => {
    if (filteredOptions.length > 0) {
      setSelectedPlatforms((prevSelectedPlatforms) => [
        ...prevSelectedPlatforms,
        filteredOptions[0],
      ]);
    }
  };

  return (
    <Stack orientation="vertical" className={styles.fullheight}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack orientation="vertical" className={styles.box}>
          <Stack
            orientation="vertical"
            gap="40px"
            className={styles.fullheight}
          >
            <Stack orientation="vertical" gap="16px">
              <Text type="heading" size="m">
                Customize your links
              </Text>
              <Text type="body" size="m" color="grey">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </Text>
            </Stack>
            <Stack
              orientation="vertical"
              gap="24px"
              className={styles.fullheight}
            >
              <div>
                <Button colorScheme="secondary" onClick={handleAddPlatform}>
                  + Add new link
                </Button>
              </div>
              {selectedPlatforms.length === 0 ? (
                <GetStarted />
              ) : (
                <Links
                  filteredOptions={filteredOptions}
                  setFilteredOptions={setFilteredOptions}
                  selectedPlatforms={selectedPlatforms}
                  setSelectedPlatforms={setSelectedPlatforms}
                  errors={errors}
                  control={control}
                />
              )}
            </Stack>
          </Stack>
        </Stack>
        <SaveDivider />
      </form>
    </Stack>
  );
}
