import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { SaveDivider } from "../SaveComponent";
import { GetStarted } from "./GetStarted";
import { AddLink } from "./AddLink";

export function LinkCustomizer() {
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
              <Button colorScheme="secondary">+ Add new link</Button>
            </div>
            {/* <GetStarted /> */}
            <AddLink />
          </Stack>
        </Stack>
      </Stack>
      <SaveDivider />
    </Stack>
  );
}
