import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../components/Stack";
import { SaveDivider } from "../SaveComponent";
import { GetStarted } from "./GetStarted";
import { Option, useUserLinkData, useOptions } from "../../../context";
import { Links } from "./Links";
import { useForm } from "react-hook-form";
import { Header } from "../Header";

type UpdateFilteredOptionsProps = {
  options: Option[];
  selectedPlatforms: Option[];
};

function updateFilteredOptions({
  options,
  selectedPlatforms,
}: UpdateFilteredOptionsProps): Option[] {
  return options.filter(
    (option) => !selectedPlatforms.some((opt) => opt.value === option.value)
  );
}

export function LinkCustomizer() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { options } = useOptions();
  const { userLinkData, setUserLinkData } = useUserLinkData();
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<Option[]>(
    userLinkData && userLinkData.length > 0 ? userLinkData : [options[0]]
  );

  React.useEffect(() => {
    setFilteredOptions(updateFilteredOptions({ options, selectedPlatforms }));
  }, [options, selectedPlatforms]);

  const onSubmit = () => {
    setUserLinkData(selectedPlatforms);
    localStorage.setItem("links", JSON.stringify(selectedPlatforms));
  };

  const handleFormSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
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
      <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleFormSubmit}>
        <Stack orientation="vertical" className={styles.box}>
          <div>
            <Stack
              orientation="vertical"
              gap="40px"
              className={styles.fullheight}
            >
              <Header onClick={handleAddPlatform} />
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
          </div>
        </Stack>
        <SaveDivider />
      </form>
    </Stack>
  );
}
