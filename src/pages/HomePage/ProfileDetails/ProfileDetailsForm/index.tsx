import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import { Input } from "../../../../components/Input";

type Props = {
  errors: any;
  control: any;
};

export function ProfileDetailsForm({ control, errors }: Props) {
  return (
    <Stack orientation="vertical" className={styles.box} spacing="between">
      <Stack orientation="vertical" align="center" gap="16px">
        <Input
          placeholder="e.g. John"
          id="firstName"
          title="First name*"
          orientation="horizontal"
        />
        <Input
          placeholder="e.g. John"
          id="firstName"
          title="Last name*"
          orientation="horizontal"
        />
        <Input
          placeholder="e.g. John"
          id="firstName"
          title="Email"
          orientation="horizontal"
        />
      </Stack>
    </Stack>
  );
}
