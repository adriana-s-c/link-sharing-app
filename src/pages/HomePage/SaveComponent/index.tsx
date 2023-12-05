import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";

type Props = {
  handleSubmit?: any;
};

export function SaveDivider({ handleSubmit }: Props) {
  return (
    <>
      <div className={styles.divider} />
      <Stack orientation="vertical" align="end">
        <Stack className={styles.buttonBox}>
          <Button colorScheme="primary" type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
