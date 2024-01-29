import { Input } from "../../../components/Input";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import useDeviceType from "../../../components/useDeviceType";

export function LoginForm() {
  const { isMobile } = useDeviceType();

  return (
    <Stack orientation="vertical" gap="24px">
      <Stack orientation="vertical" gap="15px">
        <Text type="heading" size="m">
          Login
        </Text>
        <Text type="body" size="m" color="grey">
          Add your details below to get back into the app
        </Text>
      </Stack>
      <Input
        title="Email address"
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
      <Stack
        orientation={isMobile ? "vertical" : "horizontal"}
        gap="4px"
        spacing="center"
        align="center"
      >
        <Text type="body" size="m" color="grey">
          Don’t have an account?
        </Text>
        <Link to="/createaccount">
          <Text type="body" size="m" color="purple">
            Create account
          </Text>
        </Link>
      </Stack>
    </Stack>
  );
}
