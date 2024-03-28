import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import useDeviceType from "../../../components/useDeviceType";

export function CreateAccount() {
  const { isMobile } = useDeviceType();

  return (
    <Stack orientation="vertical" gap="24px">
      <Stack orientation="vertical" gap="15px">
        <Text type="heading" size="m">
          Create account
        </Text>
        <Text type="body" size="m" color="grey">
          Let’s get you started sharing your links!
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
        title="Create password"
        id="password"
        placeholder="At least 8 characters"
        type="password"
        icon="password"
      />
      <Input
        title="Confirm password"
        id="password"
        placeholder="At least 8 characters"
        type="password"
        icon="password"
      />
      <Text type="body" size="s" color="grey">
        Password must contain at least 8 characters
      </Text>
      <Button colorScheme="primary" to="/home">
        Create new account
      </Button>
      <Stack
        orientation={isMobile ? "vertical" : "horizontal"}
        gap="4px"
        spacing="center"
        align="center"
      >
        <Text type="body" size="m" color="grey">
          Already have an account?
        </Text>
        <Link to="/">
          <Text type="body" size="m" color="purple">
            Login
          </Text>
        </Link>
      </Stack>
    </Stack>
  );
}
