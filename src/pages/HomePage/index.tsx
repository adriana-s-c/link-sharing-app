import styles from "./index.module.scss";
import { Stack } from "../../components/Stack";
import { NavBar } from "./NavBar";
import { Phone } from "./Phone";
import { Outlet } from "react-router-dom";
import { OptionsProvider, UserProvider } from "../../context";

export function HomePage() {
  return (
    <Stack orientation="vertical" className={styles.box} gap="24px">
      <NavBar />
      <Stack orientation="horizontal" gap="24px">
        <UserProvider>
          <Phone />
          <div className={styles.container}>
            <OptionsProvider>
              <Outlet />
            </OptionsProvider>
          </div>
        </UserProvider>
      </Stack>
    </Stack>
  );
}
