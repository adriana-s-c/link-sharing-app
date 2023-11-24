import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { ReactComponent as ScreenImage } from "../../../images/illustration-empty.svg";
export function LinkCustomizer() {
  return (
    <Stack orientation="vertical" className={styles.box} spacing="between">
      <Stack orientation="vertical" className={styles.box2}>
        <Stack orientation="vertical" gap="40px">
          <Stack orientation="vertical" gap="8px">
            <Text type="heading" size="m">
              Customize your links
            </Text>
            <Text type="body" size="m" color="grey">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </Text>
          </Stack>
          <Stack orientation="vertical" gap="24px">
            <Button colorScheme="secondary">+ Add new link</Button>
            <Stack
              orientation="vertical"
              align="center"
              className={styles.container}
              gap="40px"
            >
              <ScreenImage />
              <Stack
                orientation="vertical"
                className={styles.textcontainer}
                gap="24px"
              >
                <Text type="heading" size="m">
                  Let’s get you started
                </Text>
                <Text type="body" size="m" color="grey">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <div className={styles.divider} />
      <Stack orientation="vertical" align="end">
        <Stack className={styles.buttonBox}>
          <Button colorScheme="primary">Save</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
