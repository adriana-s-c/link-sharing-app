import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";
import { Text } from "../../../components/Text";

type Props = {
  onClick: () => void;
};

export function Header({ onClick }: Props) {
  return (
    <Stack orientation="vertical" gap="40px">
      <Stack orientation="vertical" gap="16px">
        <Text type="heading" size="m">
          Customize your links
        </Text>
        <Text type="body" size="m" color="grey">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Text>
      </Stack>
      <Stack orientation="vertical" gap="24px" className={styles.fullheight}>
        <div>
          <Button colorScheme="secondary" onClick={onClick}>
            + Add new link
          </Button>
        </div>
      </Stack>
    </Stack>
  );
}
