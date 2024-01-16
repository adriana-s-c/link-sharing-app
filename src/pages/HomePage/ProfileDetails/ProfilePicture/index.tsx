import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import { ReactComponent as UploadIcon } from "../../../../images/icon-upload-image.svg";
import { useUserContext } from "../../../../context";
import { ImageEditor } from "./ImageEditor";

type ProfilePictureProps = {
  picture: string | undefined;
  setPicture: React.Dispatch<
    React.SetStateAction<string | HTMLCanvasElement | undefined>
  >;
};

export function ProfilePicture({ picture, setPicture }: ProfilePictureProps) {
  const { userData, setUserData } = useUserContext();
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(true);
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const image = new Image();
      image.src = imageUrl;
      setPicture(imageUrl);

      image.onload = function () {
        const width = image.width;
        const height = image.height;

        if (width <= 1024 && height <= 1024) {
        } else {
          alert("Image dimensions must be below 1024x1024px.");
          e.target.value = "";

          URL.revokeObjectURL(imageUrl);
        }
      };
    }
  };

  return (
    <Stack
      orientation="horizontal"
      align="center"
      className={styles.box}
      gap="16px"
    >
      <Text type="body" size="m" color="grey" className={styles.width}>
        Profile picture
      </Text>
      <Stack gap="24px" align="center">
        <div className={styles.buttonBox}>
          {isActive ? (
            <ImageEditor
              picture={picture}
              setPicture={setPicture}
              setIsActive={setIsActive}
            />
          ) : (
            <>
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
                  {picture ? (
                    <img src={picture} alt="Avatar" className={styles.image} />
                  ) : null}
                  <Stack
                    orientation="vertical"
                    align="center"
                    gap="8px"
                    className={styles.content}
                  >
                    <UploadIcon
                      className={
                        picture ? `${styles[`icon-white`]}` : styles.icon
                      }
                    />
                    <Text
                      color={picture ? "white" : "purple"}
                      type="heading"
                      size="s"
                    >
                      {picture ? "Change Image" : "+ Upload Image"}
                    </Text>
                  </Stack>
                </Stack>
              </label>
            </>
          )}
        </div>
        <Text type="body" size="s" color="grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </Text>
      </Stack>
    </Stack>
  );
}
