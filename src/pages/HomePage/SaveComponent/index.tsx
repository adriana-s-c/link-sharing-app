import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";
import clsx from "clsx";

type Props = {
  disabled?: boolean;
  position?: "absolute" | "sticky";
};

export function SaveDivider({
  disabled = false,
  position = "absolute",
}: Props) {
  return (
    <div className={clsx(styles.container, styles[`container-${position}`])}>
      <div className={styles.divider} />
      <Stack orientation="vertical" align="end">
        <Stack className={styles.buttonBox}>
          <Button colorScheme="primary" type="submit" disabled={disabled}>
            Save
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
