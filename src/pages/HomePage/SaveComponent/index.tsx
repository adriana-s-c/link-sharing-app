import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";
import useDeviceType from "../../../components/useDeviceType";

type Props = {
  disabled?: boolean;
};

export function SaveDivider({ disabled = false }: Props) {
  const { isTablet } = useDeviceType();

  return (
    <div className={isTablet ? styles.containerTablet : styles.container}>
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
