import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";

export function PreviewNavigation() {
  return (
    <Stack className={styles.box} spacing="between">
      <div>
        <Button colorScheme="secondary">Back to Editor</Button>
      </div>
      <div>
        <Button colorScheme="primary">Share Link</Button>
      </div>
    </Stack>
  );
}
