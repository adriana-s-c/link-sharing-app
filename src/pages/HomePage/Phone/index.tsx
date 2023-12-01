import styles from "./index.module.scss";
import { ReactComponent as ImagePhone } from "../../../images/illustration-phone-mockup.svg";
import { MediaBox } from "../../../components/MediaBox";

export function Phone() {
  return (
    <div className={styles.box}>
      <div className={styles.position}>
        <ImagePhone className={styles.phone} />
        <MediaBox name="Github" className={styles.mediabox} />
        <MediaBox name="Youtube" className={styles.mediabox} />
        <MediaBox name="LinkedIn" className={styles.mediabox} />
        <MediaBox name="Devto" className={styles.mediabox} />
        <MediaBox name="StackOverflow" className={styles.mediabox} />
      </div>
    </div>
  );
}
