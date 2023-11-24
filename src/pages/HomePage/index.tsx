import styles from "./index.module.scss";
import { Stack } from "../../components/Stack";
import { NavBar } from "./NavBar";
import { Phone } from "./Phone";
import { LinkCustomizer } from "./LinkCustomizer";

export function HomePage() {
  return (
    <Stack orientation="vertical" className={styles.box} gap="24px">
      <NavBar />
      <Stack orientation="horizontal" gap="24px">
        <Phone />
        <LinkCustomizer />
      </Stack>
    </Stack>
  );
}
