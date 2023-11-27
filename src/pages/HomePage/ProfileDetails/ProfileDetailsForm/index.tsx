import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";

export function ProfileDetailsForm() {
  return (
    <Stack orientation="vertical" className={styles.box} spacing="between">
      <Stack orientation="vertical" align="center" gap="16px">
        <Stack orientation="horizontal" className={styles.fullWitdh}>
          <label htmlFor="firstName">
            <Text type="body" size="m" color="grey">
              First name*
            </Text>
          </label>
          <input placeholder="e.g. John" id="firstName" name="firstName" />
        </Stack>
        <Stack orientation="horizontal" className={styles.fullWitdh}>
          <label htmlFor="lastName">
            <Text type="body" size="m" color="grey">
              Last name*
            </Text>
          </label>
          <input placeholder="e.g. Appleseed" id="lastName" name="lastName" />
        </Stack>
        <Stack orientation="horizontal" className={styles.fullWitdh}>
          <label htmlFor="email">
            <Text type="body" size="m" color="grey">
              Email
            </Text>
          </label>
          <input placeholder="e.g. email@example.com" id="email" name="email" />
        </Stack>
      </Stack>
    </Stack>
  );
}
