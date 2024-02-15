import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import logoBig from "../../../images/logo-devlinks-large.svg";
import logoSmall from "../../../images/logo-devlinks-small.svg";
import previewIcon from "../../../images/icon-preview-header.svg";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useDeviceType from "../../../components/useDeviceType";

export function NavBar() {
  const location = useLocation();
  const { isMobile } = useDeviceType();
  const isProfileActive = location.pathname === "/home/profile";

  const logo = isMobile ? logoSmall : logoBig;

  return (
    <Stack orientation="horizontal" spacing="between" className={styles.box}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <Stack orientation="horizontal">
        <Link to="/home">
          <Button
            icon="link"
            colorScheme={isProfileActive ? "third" : "chosen"}
          >
            {isMobile ? null : "Links"}
          </Button>
        </Link>
        <Link to="/home/profile">
          <Button
            icon="profile"
            colorScheme={isProfileActive ? "chosen" : "third"}
          >
            {isMobile ? null : "Profile Details"}
          </Button>
        </Link>
      </Stack>
      <Stack>
        <Link to="/preview">
          <Button icon="preview" colorScheme="secondary">
            {isMobile ? null : "Preview"}
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
