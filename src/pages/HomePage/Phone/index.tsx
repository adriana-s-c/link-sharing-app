import styles from "./index.module.scss";
import { ReactComponent as ImagePhone } from "../../../images/illustration-phone-mockup.svg";
import { MediaBox } from "../../../components/MediaBox";
import { useUserContext, useUserLinkData } from "../../../context";
import { Text } from "../../../components/Text";
import { Stack } from "../../../components/Stack";

const isLongName = (firstName: string, lastName: string): "s" | "m" => {
  const fullNameLength = firstName.length + lastName.length;

  if (fullNameLength <= 14) {
    return "m";
  } else {
    return "s";
  }
};

export function Phone() {
  const { userLinkData } = useUserLinkData();
  const { userData } = useUserContext();

  return (
    <div className={styles.box}>
      <div className={styles.position}>
        <ImagePhone className={styles.phone} />
        {userData?.image && (
          <img src={userData.image} alt="Avatar" className={styles.image} />
        )}
        <Stack orientation="vertical" gap="16px">
          {userData?.firstName && (
            <Text
              color="black"
              type="heading"
              size={isLongName(userData.firstName, userData.lastName)}
              className={styles.name}
            >
              {`${userData.firstName} ${userData.lastName ?? ""}`}
            </Text>
          )}
          {userData?.email && (
            <Text color="black" type="body" size="s" className={styles.email}>
              {userData.email}
            </Text>
          )}
        </Stack>
        {userLinkData?.slice(0, 5).map((platform, index) => (
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
