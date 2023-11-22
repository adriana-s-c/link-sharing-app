import styles from "./index.module.scss";
import logo from "../../images/logo-devlinks-large.svg";
import { LoginForm } from "./form";
import { Stack } from "../../components/Stack";

export function Login() {
  return (
    <Stack orientation="vertical" gap="51px" align="center">
      <img src={logo} alt="Logo" className={styles.logo} />
      <LoginForm />
    </Stack>
  );
}
