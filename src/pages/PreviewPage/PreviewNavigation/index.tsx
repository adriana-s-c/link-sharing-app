import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";
import { Link } from "react-router-dom";

export function PreviewNavigation() {
  return (
    <Stack className={styles.box} spacing="between">
      <div>
        <Link to="/home">
          <Button colorScheme="secondary">Back to Editor</Button>
        </Link>
      </div>
      <div>
        <Button colorScheme="primary">Share Link</Button>
      </div>
    </Stack>
  );
}
