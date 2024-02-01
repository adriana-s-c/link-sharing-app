import styles from "./index.module.scss";
import { Button } from "../../../components/Button";
import { Stack } from "../../../components/Stack";
import { Link } from "react-router-dom";
import useDeviceType from "../../../components/useDeviceType";

type Props = {
  onClick: () => void;
};

export function PreviewNavigation({ onClick }: Props) {
  const { isMobile } = useDeviceType();

  return (
    <Stack
      className={isMobile ? styles.boxMobile : styles.box}
      spacing="between"
      gap={isMobile ? "16px" : "0px"}
    >
      <div className={isMobile ? styles.buttonwidth : null}>
        <Link to="/home">
          <Button colorScheme="secondary">Back to Editor</Button>
        </Link>
      </div>
      <div className={isMobile ? styles.buttonwidth : null}>
        <Button colorScheme="primary" onClick={onClick}>
          Share Link
        </Button>
      </div>
    </Stack>
  );
}
