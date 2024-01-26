import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";
import { Link } from "react-router-dom";

type Props = {
  onClick: () => void;
};

export function PreviewNavigation({ onClick }: Props) {
  return (
    <Stack className={styles.box} spacing="between">
      <div>
        <Link to="/home">
          <Button colorScheme="secondary">Back to Editor</Button>
        </Link>
      </div>
      <div>
        <Button colorScheme="primary" onClick={onClick}>
          Share Link
        </Button>
      </div>
    </Stack>
  );
}
