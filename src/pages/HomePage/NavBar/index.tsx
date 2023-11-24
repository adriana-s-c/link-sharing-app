import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import logo from "../../../images/logo-devlinks-large.svg";
import { Button } from "../../../components/Button";

export function NavBar() {
  return (
    <Stack orientation="horizontal" spacing="between" className={styles.box}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <Stack orientation="horizontal">
        <Button icon="link" colorScheme="active">
          Links
        </Button>
        <Button icon="profile" colorScheme="third">
          Profile Details
        </Button>
      </Stack>
      <Stack>
        <Button colorScheme="secondary">Preview</Button>
      </Stack>
    </Stack>
  );
}
