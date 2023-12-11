import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { SaveDivider } from "../SaveComponent";
import { GetStarted } from "./GetStarted";
import { Option, UserLinkDataContext } from "../../../context";
import { Links } from "./Links";

type UserLinkData = Option[];

export function LinkCustomizer() {
  const [addLinkQuantity, setAddLinkQuantity] = React.useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<Option[]>(
    []
  );
  const { userLinkData, setUserLinkData } =
    React.useContext(UserLinkDataContext);

  const handleSubmit = () => {
    setUserLinkData(selectedPlatforms);
  };

  const handleAddLink = () => {
    setAddLinkQuantity(addLinkQuantity + 1);
  };

  return (
    <Stack orientation="vertical" className={styles.fullheight}>
      <Stack orientation="vertical" className={styles.box}>
        <Stack orientation="vertical" gap="40px" className={styles.fullheight}>
          <Stack orientation="vertical" gap="16px">
            <Text type="heading" size="m">
              Customize your links
            </Text>
            <Text type="body" size="m" color="grey">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </Text>
          </Stack>
          <Stack
            orientation="vertical"
            gap="24px"
            className={styles.fullheight}
          >
            <div>
              <Button colorScheme="secondary" onClick={handleAddLink}>
                + Add new link
              </Button>
            </div>
            <Links
              addLinkQuantity={addLinkQuantity}
              selectedPlatforms={selectedPlatforms}
              setSelectedPlatforms={setSelectedPlatforms}
            />
          </Stack>
        </Stack>
      </Stack>
      <SaveDivider handleSubmit={handleSubmit} />
    </Stack>
  );
}
