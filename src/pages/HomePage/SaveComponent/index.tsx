import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";
import clsx from "clsx";
import useDeviceType from "../../../components/useDeviceType";

type Props = {
  disabled?: boolean;
  position?: "absolute" | "sticky" | "relative";
};

export function SaveComponent({
  disabled = false,
  position = "absolute",
}: Props) {
  const { isMobile } = useDeviceType();

  return (
    <div className={clsx(styles.container, styles[`container-${position}`])}>
      <div className={styles.divider} />
      <Stack
        orientation="vertical"
        align={isMobile ? "center" : "end"}
        className={isMobile ? styles.paddingMobile : null}
      >
        <Stack className={isMobile ? styles.buttonBoxMobile : styles.buttonBox}>
          <Button colorScheme="primary" type="submit" disabled={disabled}>
            Save
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
