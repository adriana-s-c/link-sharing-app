import styles from "./index.module.scss";
import { ReactComponent as ImagePhone } from "../../../images/illustration-phone-mockup.svg";
import { UserDataDisplay } from "../../../components/UserDataDisplay/UserDataDisplay";

export const Phone = () => {
  return (
    <div className={styles.box}>
      <div className={styles.position}>
        <ImagePhone className={styles.phone} />
        <UserDataDisplay />
      </div>
    </div>
  );
};
