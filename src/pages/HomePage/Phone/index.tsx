import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import { ReactComponent as ImagePhone } from "../../../images/illustration-phone-mockup.svg";

export function Phone() {
  return (
    <Stack className={styles.box}>
      <ImagePhone />
    </Stack>
  );
}
