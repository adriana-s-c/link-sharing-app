import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../components/Stack";
import { NavBar } from "./NavBar";
import { Phone } from "./Phone";
import { Outlet } from "react-router-dom";
import { OptionsProvider, UserLinkDataProvider } from "../../context";

export function HomePage() {
  return (
    <Stack orientation="vertical" className={styles.box} gap="24px">
      <UserLinkDataProvider>
        <NavBar />
        <Stack orientation="horizontal" gap="24px">
          <Phone />
          <div className={styles.container}>
            <OptionsProvider>
              <Outlet />
            </OptionsProvider>
          </div>
        </Stack>
      </UserLinkDataProvider>
    </Stack>
  );
}
