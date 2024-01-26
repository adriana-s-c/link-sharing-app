import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../components/Stack";
import { UserDataDisplay } from "../../components/UserDataDisplay";
import { PreviewNavigation } from "./PreviewNavigation";
import { UserProvider, UserLinkDataProvider } from "../../context";
import { CopyLinkMessage } from "./CopyLinkMessage";

export function PreviewPage() {
  const [showMessage, setShowMessage] = React.useState<boolean>(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000);
  };

  return (
    <UserProvider>
      <UserLinkDataProvider>
        <Stack
          orientation="vertical"
          align="center"
          spacing="center"
          className={styles.box}
          gap="45px"
        >
          <div className={styles.background} />
          <Stack
            orientation="vertical"
            gap="106px"
            align="center"
            spacing="center"
            className={styles.width}
          >
            <PreviewNavigation onClick={handleClick} />
            <div className={styles.container}>
              <UserDataDisplay variant="preview" />
            </div>
          </Stack>
          {showMessage && <CopyLinkMessage />}
        </Stack>
      </UserLinkDataProvider>
    </UserProvider>
  );
}
