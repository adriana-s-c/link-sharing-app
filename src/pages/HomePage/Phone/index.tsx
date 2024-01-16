import styles from "./index.module.scss";
import { ReactComponent as ImagePhone } from "../../../images/illustration-phone-mockup.svg";
import { MediaBox } from "../../../components/MediaBox";
import { useUserContext, useUserLinkData } from "../../../context";
import { Text } from "../../../components/Text";
import { Stack } from "../../../components/Stack";

export function Phone() {
  const { userLinkData } = useUserLinkData();
  const { userData } = useUserContext();

  return (
    <div className={styles.box}>
      <div className={styles.position}>
        <ImagePhone className={styles.phone} />
        {userData && userData.image ? (
          <img src={userData.image} alt="Avatar" className={styles.image} />
        ) : null}
        <Stack orientation="vertical" gap="16px">
          {userData && userData.firstName ? (
            <Text color="black" type="heading" size="m" className={styles.name}>
              {`${userData.firstName} ${userData.lastName}`}
            </Text>
          ) : null}
          {userData && userData.email ? (
            <Text color="black" type="body" size="s" className={styles.email}>
              {userData.email}
            </Text>
          ) : null}
        </Stack>
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
