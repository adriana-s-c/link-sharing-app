import styles from "./index.module.scss";
import logo from "../../images/logo-devlinks-large.svg";
import { Stack } from "../../components/Stack";
import { CreateAccount } from "./CreateAccount";

export function EntryPage() {
  return (
    <Stack orientation="vertical" gap="51px" align="center">
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.box}>
        <CreateAccount />
      </div>
    </Stack>
  );
}
