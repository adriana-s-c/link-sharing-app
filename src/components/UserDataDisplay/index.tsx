import styles from "./index.module.scss";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { MediaBox } from "../MediaBox";
import { Option, useUserContext, useUserLinkData } from "../../context";
import useDeviceType from "../useDeviceType";

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

const renderMediaBoxes = (userLinkData?: Option[]) => {
  return (
    userLinkData
      ?.slice(0, 5)
      .map((platform, index) => (
        <MediaBox
          key={index}
          name={platform.value}
          link={platform.link || "#"}
          className={styles.mediabox}
        />
      )) || null
  );
};

type UserDataDisplayProps = {
  variant?: "phone" | "preview";
};

export function UserDataDisplay({ variant = "preview" }: UserDataDisplayProps) {
  const { userLinkData } = useUserLinkData();
  const { userData } = useUserContext();
  const { isMobile } = useDeviceType();

  const boxClass = variant === "preview" ? styles.boxPreview : styles.boxPhone;

  return (
    <Stack orientation="vertical" className={boxClass} gap="14px">
      <Stack
        orientation="vertical"
        className={styles.container}
        gap="14px"
        align="center"
      >
        {userData?.image ? (
          <img src={userData.image} alt="Avatar" className={styles.image} />
        ) : (
          <div className={styles.greyCircle}></div>
        )}
        <Stack
          orientation="vertical"
          gap="14px"
          align="center"
          className={isMobile ? null : styles.background}
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
