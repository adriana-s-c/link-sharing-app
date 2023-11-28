import { Stack } from "../../components/Stack";
import { PreviewNavigation } from "./PreviewNavigation";
import { ProfileBox } from "./ProfileBox";
import styles from "./index.module.scss";

export function PreviewPage() {
  return (
    <Stack
      orientation="vertical"
      align="center"
      spacing="center"
      className={styles.box}
    >
      <div className={styles.background} />
      <Stack
        orientation="vertical"
        gap="106px"
        align="center"
        spacing="center"
        className={styles.width}
      >
        <PreviewNavigation />
        <ProfileBox />
      </Stack>
    </Stack>
  );
}
