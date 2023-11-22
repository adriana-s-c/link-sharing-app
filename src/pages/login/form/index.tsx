import styles from "./index.module.scss";
import { Input } from "../../../components/Input";
import { Stack } from "../../../components/Stack";

export function LoginForm() {
  return (
    <Stack orientation="vertical" gap="24px" className={styles.box}>
      <Stack orientation="vertical" gap="1px">
        <h2>Login</h2>
        <p>Add your details below to get back into the app</p>
      </Stack>
      <Input
        title="Email adress"
        id="email"
        placeholder="e.g. alex@email.com"
        type="email"
        icon="email"
      />
      <Input
        title="Password"
        id="password"
        placeholder="Enter your password"
        type="password"
        icon="password"
      />
      <button>Login</button>
      <Stack
        orientation="horizontal"
        gap="4px"
        spacing="center"
        className={styles.textBox}
      >
        <p>Don’t have an account?</p>
        <p className={styles.purpleText}>Create account</p>
      </Stack>
    </Stack>
  );
}
