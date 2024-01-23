import styles from "./index.module.scss";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { MediaBox } from "../MediaBox";
import { useUserContext, useUserLinkData } from "../../context";

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

export function UserDataDisplay() {
  const { userLinkData } = useUserLinkData();
  const { userData } = useUserContext();

  return (
    <Stack orientation="vertical" className={styles.box} gap="14px">
      <Stack
        orientation="vertical"
        className={styles.container}
        gap="14px"
        align="center"
      >
        {userData?.image && (
          <img src={userData.image} alt="Avatar" className={styles.image} />
        )}
        <Stack
          orientation="vertical"
          gap="14px"
          align="center"
          className={styles.background}
        >
          {renderNameText(userData)}
          {renderEmailText(userData?.email)}
        </Stack>
      </Stack>
      <Stack orientation="vertical" align="center" gap="20px">
        {renderMediaBoxes(userLinkData)}
      </Stack>
    </Stack>
  );
}
