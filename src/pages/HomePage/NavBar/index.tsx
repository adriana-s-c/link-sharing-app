import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import { Button } from "../../../components/Button";
import { Tab } from "../../../components/Tab";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logoBig from "../../../images/logo-devlinks-large.svg";
import logoSmall from "../../../images/logo-devlinks-small.svg";
import useDeviceType from "../../../components/useDeviceType";

export function NavBar() {
  const location = useLocation();
  const { isMobile } = useDeviceType();
  const isProfileActive = location.pathname === "/home/profile";

  const logo = isMobile ? logoSmall : logoBig;

  return (
    <Stack orientation="horizontal" spacing="between" className={styles.box}>
      <Link to="/home">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <Stack orientation="horizontal" gap="16px">
        <Link to="/home">
          <Tab icon="link" colorScheme={isProfileActive ? "default" : "chosen"}>
            {isMobile ? null : "Links"}
          </Tab>
        </Link>
        <Link to="/home/profile">
          <Tab
            icon="profile"
            colorScheme={isProfileActive ? "chosen" : "default"}
          >
            Profile Details
          </Tab>
        </Link>
      </Stack>
      <Stack>
        <Button icon="preview" colorScheme="secondary" to="/preview">
          {isMobile ? null : "Preview"}
        </Button>
      </Stack>
    </Stack>
  );
}
