import styles from "./index.module.scss";
import { Stack } from "../../../components/Stack";
import { ProfileData } from "./ProfileData";
import { MediaBox } from "../../../components/MediaBox";

export function ProfileBox() {
  return (
    <Stack orientation="vertical" className={styles.box} gap="56px">
      <ProfileData />
      <Stack orientation="vertical" gap="20px">
        <MediaBox name="Github" />
        <MediaBox name="Youtube" />
        <MediaBox name="LinkedIn" />
        <MediaBox name="Gitlab" />
        <MediaBox name="Codewars" />
        <MediaBox name="Twitter" />
        <MediaBox name="Twitch" />
        <MediaBox name="StackOverflow" />
        <MediaBox name="Devto" />
        <MediaBox name="FrontendMentor" />
        <MediaBox name="Hashnode" />
        <MediaBox name="freeCodeCamp" />
        <MediaBox name="Facebook" />
      </Stack>
    </Stack>
  );
}