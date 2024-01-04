import styles from "./index.module.scss";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import { ReactComponent as UploadIcon } from "../../../../images/icon-upload-image.svg";

export function ProfilePicture() {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = function (event) {
        if (event.target) {
          image.src = event.target.result as string;
        }
      };

      reader.readAsDataURL(file);

      image.onload = function () {
        const width = image.width;
        const height = image.height;

        if (width <= 1024 && height <= 1024) {
          console.log("Image dimensions are within the limit");
        } else {
          alert("Image dimensions must be below 1024x1024px.");
          e.target.value = "";
        }
      };
    }
  };

  return (
    <Stack
      orientation="horizontal"
      align="center"
      className={styles.box}
      gap="24px"
    >
      <Text type="body" size="m" color="grey" className={styles.width}>
        Profile picture
      </Text>
      <Stack gap="24px" align="center">
        <div className={styles.buttonBox}>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="imgupload"
            className={styles.input}
            onChange={handleImageChange}
          />
          <label htmlFor="imgupload">
            <Stack
              className={styles.uploadDiv}
              align="center"
              spacing="center"
              orientation="vertical"
              gap="8px"
            >
              <UploadIcon />
              <Text color="purple" type="heading" size="s">
                + Upload Image
              </Text>
            </Stack>
          </label>
        </div>
        <Text type="body" size="s" color="grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </Text>
      </Stack>
    </Stack>
  );
}
