import styles from "./index.module.scss";
import { Stack } from "../../components/Stack";
import { NavBar } from "./NavBar";
import { Phone } from "./Phone";
import { Outlet } from "react-router-dom";
import { OptionsProvider, UserProvider } from "../../context";
import useDeviceType from "../../components/useDeviceType";
import clsx from "clsx";

export function HomePage() {
  const { isTablet, isMobile } = useDeviceType();

  return (
    <Stack
      orientation="vertical"
      className={isMobile ? styles.boxMobile : styles.box}
      gap="24px"
    >
      <NavBar />
      <Stack
        orientation="horizontal"
        gap="24px"
        className={isMobile ? styles.widthMobile : styles.width}
      >
        <UserProvider>
          {isTablet || isMobile ? null : <Phone />}
          <div
            className={
              isMobile
                ? clsx(styles.container, styles.containerMobile)
                : styles.container
            }
          >
            <OptionsProvider>
              <Outlet />
            </OptionsProvider>
          </div>
        </UserProvider>
      </Stack>
    </Stack>
  );
}
