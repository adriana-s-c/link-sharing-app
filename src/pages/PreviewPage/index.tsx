import styles from "./index.module.scss";
import { Stack } from "../../components/Stack";
import { UserDataDisplay } from "../../components/UserDataDisplay";
import { PreviewNavigation } from "./PreviewNavigation";
import { UserProvider, UserLinkDataProvider } from "../../context";

export function PreviewPage() {
  return (
    <UserProvider>
      <UserLinkDataProvider>
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
            <Stack spacing="center" className={styles.container}>
              <UserDataDisplay />
            </Stack>
          </Stack>
        </Stack>
      </UserLinkDataProvider>
    </UserProvider>
  );
}
