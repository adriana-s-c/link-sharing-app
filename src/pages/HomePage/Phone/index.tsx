import styles from "./index.module.scss";
import { ReactComponent as ImagePhone } from "../../../images/illustration-phone-mockup.svg";
import { MediaBox } from "../../../components/MediaBox";
import { useUserContext, useUserLinkData } from "../../../context";

export function Phone() {
  const { userLinkData } = useUserLinkData();
  const { userData } = useUserContext();

  return (
    <div className={styles.box}>
      <div className={styles.position}>
        <ImagePhone className={styles.phone} />
        {userData ? (
          <img src={userData.image} alt="Avatar" className={styles.image} />
        ) : null}
        {userLinkData &&
          userLinkData
            .slice(0, 5)
            .map((platform, index) => (
              <MediaBox
                key={index}
                name={platform.value}
                className={styles.mediabox}
              />
            ))}
      </div>
    </div>
  );
}
