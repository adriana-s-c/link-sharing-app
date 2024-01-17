import styles from "./index.module.scss";
import { ReactComponent as ImagePhone } from "../../../images/illustration-phone-mockup.svg";
import { MediaBox } from "../../../components/MediaBox";
import { useUserContext, useUserLinkData } from "../../../context";
import { Text } from "../../../components/Text";
import { Stack } from "../../../components/Stack";

const isLongName = (firstName?: string, lastName?: string): "s" | "m" => {
  const fullNameLength = (firstName?.length || 0) + (lastName?.length || 0);
  return fullNameLength <= 14 ? "m" : "s";
};

const renderNameText = (
  userData?: {
    firstName?: string;
    lastName?: string;
  } | null
) => {
  if (!userData?.firstName) return null;

  const fullName = `${userData.firstName} ${userData.lastName ?? ""}`;

  return (
    <Text
      color="black"
      type="heading"
      size={isLongName(userData.firstName, userData.lastName)}
      className={styles.name}
    >
      {fullName}
    </Text>
  );
};

const renderEmailText = (email?: string) => {
  return email ? (
    <Text color="black" type="body" size="s" className={styles.email}>
      {email}
    </Text>
  ) : null;
};

const renderMediaBoxes = (userLinkData?: { value: string }[]) => {
  return (
    userLinkData
      ?.slice(0, 5)
      .map((platform, index) => (
        <MediaBox
          key={index}
          name={platform.value}
          className={styles.mediabox}
        />
      )) || null
  );
};

export const Phone = () => {
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
          {renderNameText(userData)}
          {renderEmailText(userData?.email)}
        </Stack>
        {renderMediaBoxes(userLinkData)}
      </div>
    </div>
  );
};
