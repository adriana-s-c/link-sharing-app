import styles from "./index.module.scss";
import { Stack } from "../../components/Stack";
import { NavBar } from "./NavBar";

export function HomePage() {
  return (
    <Stack orientation="vertical" className={styles.box}>
      <NavBar />
    </Stack>
  );
}
