import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";

export function SaveDivider() {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <Stack orientation="vertical" align="end">
        <Stack className={styles.buttonBox}>
          <Button colorScheme="primary" type="submit">
            Save
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
