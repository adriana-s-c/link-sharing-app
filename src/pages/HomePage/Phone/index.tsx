import styles from "./index.module.scss";
import { ReactComponent as ImagePhone } from "../../../images/illustration-phone-mockup.svg";
import { UserDataDisplay } from "../../../components/UserDataDisplay";
import { Stack } from "../../../components/Stack";

export const Phone = () => {
  return (
    <Stack className={styles.box}>
      <ImagePhone className={styles.phone} />
      <div className={styles.margin}>
        <UserDataDisplay variant="phone" />
      </div>
    </Stack>
  );
};
