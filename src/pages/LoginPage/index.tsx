import styles from "./index.module.scss";
import logo from "../../images/logo-devlinks-large.svg";
import { Stack } from "../../components/Stack";
import { Outlet } from "react-router-dom";
import useDeviceType from "../../components/useDeviceType";

export function EntryPage() {
  const { isMobile } = useDeviceType();

  return (
    <Stack
      orientation="vertical"
      gap="51px"
      className={isMobile ? styles.containerMobile : styles.container}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={isMobile ? styles.boxMobile : styles.box}>
        <Outlet />
      </div>
    </Stack>
  );
}
