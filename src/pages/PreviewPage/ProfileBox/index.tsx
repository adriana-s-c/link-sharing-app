import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import { ProfileData } from "./ProfileData";
import { MediaBox } from "../../../components/MediaBox";
import { useUserLinkData } from "../../../context";

export function ProfileBox() {
  const { userLinkData } = useUserLinkData();
  console.log(userLinkData);
  return (
    <Stack orientation="vertical" className={styles.box} gap="56px">
      <ProfileData />
      <Stack orientation="vertical" gap="20px">
        {userLinkData &&
          userLinkData.map((platform, index) => (
            <MediaBox
              key={index}
              name={platform.value}
              className={styles.mediabox}
            />
          ))}
      </Stack>
    </Stack>
  );
}
