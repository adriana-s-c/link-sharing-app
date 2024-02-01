import styles from "./index.module.scss";
import * as React from "react";
import clsx from "clsx";
import { Stack } from "../../components/Stack";
import { UserDataDisplay } from "../../components/UserDataDisplay";
import { PreviewNavigation } from "./PreviewNavigation";
import { UserProvider, UserLinkDataProvider } from "../../context";
import useDeviceType from "../../components/useDeviceType";
import { Message } from "../../components/Message";

export function PreviewPage() {
  const [showMessage, setShowMessage] = React.useState<boolean>(false);
  const { isMobile } = useDeviceType();

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <UserProvider>
      <UserLinkDataProvider>
        <Stack
          orientation="vertical"
          align="center"
          spacing={isMobile ? "flexStart" : "center"}
          className={clsx(styles.box, { [styles.mobile]: isMobile })}
          gap={isMobile ? "0px" : "45px"}
        >
          <div className={isMobile ? null : styles.background} />
          <Stack
            orientation="vertical"
            gap={isMobile ? "60px" : "106px"}
            align="center"
            spacing="center"
            className={styles.width}
          >
            <PreviewNavigation onClick={handleClick} />
            <div
              className={isMobile ? styles.containerMobile : styles.container}
            >
              <UserDataDisplay variant="preview" />
            </div>
          </Stack>
        </Stack>
        {showMessage && (
          <Message
            text="The link has been copied to your clipboard!"
            type="preview"
          />
        )}
      </UserLinkDataProvider>
    </UserProvider>
  );
}
