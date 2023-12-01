import styles from "./index.module.scss";
import logo from "../../images/logo-devlinks-large.svg";
import { Stack } from "../../components/Stack";
import { Outlet } from "react-router-dom";

export function EntryPage() {
  return (
    <Stack orientation="vertical" gap="51px" className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.box}>
        <Outlet />
      </div>
    </Stack>
  );
}
