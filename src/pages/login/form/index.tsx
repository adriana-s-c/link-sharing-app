import styles from "./index.module.scss";
import { Input } from "../../../components/Input";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";

export function LoginForm() {
  return (
    <Stack orientation="vertical" gap="24px" className={styles.box}>
      <Stack orientation="vertical" gap="15px">
        <Text type="heading" size="m">
          Login
        </Text>
        <Text type="body" size="m" color="grey">
          Add your details below to get back into the app
        </Text>
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
      <Button colorScheme="primary">Login</Button>
      <Stack orientation="horizontal" gap="4px" spacing="center">
        <Text type="body" size="m" color="grey">
          Don’t have an account?
        </Text>
        <Text type="body" size="m" color="purple">
          Create account
        </Text>
      </Stack>
    </Stack>
  );
}
