import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";

export function SaveDivider() {
  return (
    <>
      <div className={styles.divider} />
      <Stack orientation="vertical" align="end">
        <Stack className={styles.buttonBox}>
          <Button colorScheme="primary">Save</Button>
        </Stack>
      </Stack>
    </>
  );
}
