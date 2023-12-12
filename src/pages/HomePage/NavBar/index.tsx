import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import logo from "../../../images/logo-devlinks-large.svg";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavBar() {
  const location = useLocation();

  const isProfileActive = location.pathname === "/home/profile";

  return (
    <Stack orientation="horizontal" spacing="between" className={styles.box}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <Stack orientation="horizontal">
        <Link to="/home">
          <Button
            icon="link"
            colorScheme={isProfileActive ? "third" : "active"}
          >
            Links
          </Button>
        </Link>
        <Link to="/home/profile">
          <Button
            icon="profile"
            colorScheme={isProfileActive ? "active" : "third"}
          >
            Profile Details
          </Button>
        </Link>
      </Stack>
      <Stack>
        <Link to="/preview">
          <Button colorScheme="secondary">Preview</Button>
        </Link>
      </Stack>
    </Stack>
  );
}
