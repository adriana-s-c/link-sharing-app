import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../components/Stack";
import { SaveComponent } from "../SaveComponent";
import { GetStarted } from "./GetStarted";
import { Option, useUserLinkData, useOptions } from "../../../context";
import { Links } from "./Links";
import { useForm } from "react-hook-form";
import { Header } from "../Header";
import useDeviceType from "../../../components/useDeviceType";
import clsx from "clsx";

interface FormValues {
  [key: string]: any;
}

export function LinkCustomizer() {
  const { options } = useOptions();
  const { userLinkData, setUserLinkData } = useUserLinkData();
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<Option[]>(
    userLinkData && userLinkData.length > 0 ? userLinkData : []
  );

  const defaultValue = (platformName: string) => {
    const platform = userLinkData.find(
      (platform) => platform.value === platformName
    );
    return platform && platform.link ? platform.link : "";
  };

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      "link-GitHub": defaultValue("GitHub"),
      "link-Facebook": defaultValue("Facebook"),
      "link-LinkedIn": defaultValue("LinkedIn"),
      "link-YouTube": defaultValue("YouTube"),
      "link-GitLab": defaultValue("GitLab"),
      "link-Frontend Mentor": defaultValue("Frontend Mentor"),
      "link-Dev.to": defaultValue("Dev.to"),
      "link-Twitter": defaultValue("Twitter"),
      "link-Codewars": defaultValue("Codewars"),
      "link-freeCodeCamp": defaultValue("freeCodeCamp"),
      "link-Hashnode": defaultValue("Hashnode"),
      "link-Stack Overflow": defaultValue("Stack Overflow"),
      "link-Twitch": defaultValue("Twitch"),
      platform: "GitHub",
    },
    reValidateMode: "onChange",
  });

  const [disabledButton, setDisabledButton] = React.useState(false);

  const { isMobile } = useDeviceType();

  React.useEffect(() => {
    const newFilteredOptions = options.filter(
      (option) =>
        !selectedPlatforms.some((selected) => selected.value === option.value)
    );
    setFilteredOptions(newFilteredOptions);
  }, [options, selectedPlatforms]);

  const onSubmit = (data: FormValues) => {
    setUserLinkData(selectedPlatforms);
    localStorage.setItem("links", JSON.stringify(selectedPlatforms));
    reset(data);
    setDisabledButton(true);
  };

  const handleAddPlatform = () => {
    if (filteredOptions.length > 0) {
      setSelectedPlatforms((prevSelectedPlatforms) => [
        ...prevSelectedPlatforms,
        filteredOptions[0],
      ]);
    }
    setDisabledButton(false);
  };

  React.useEffect(() => {
    if (isDirty) {
      setDisabledButton(false);
    }
  }, [isDirty]);

  const isFormDisabled = Object.keys(errors).length > 0 || disabledButton;

  const isStickyBottom = selectedPlatforms.length > 1 ? "sticky" : "absolute";

  return (
    <Stack orientation="vertical" className={styles.fullheight}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          orientation="vertical"
          className={
            isMobile ? clsx(styles.box, styles["box-mobile"]) : styles.box
          }
        >
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
                  options={{
                    filtered: filteredOptions,
                    selected: selectedPlatforms,
                    setSelected: setSelectedPlatforms,
                  }}
                  form={{
                    errors: errors,
                    control: control,
                  }}
                  setDisabledButton={setDisabledButton}
                />
              )}
            </Stack>
          </div>
        </Stack>
        <SaveComponent position={isStickyBottom} disabled={isFormDisabled} />
      </form>
    </Stack>
  );
}
