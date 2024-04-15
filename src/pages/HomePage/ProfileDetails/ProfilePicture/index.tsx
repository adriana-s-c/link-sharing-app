import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import { ReactComponent as UploadIcon } from "../../../../images/icon-upload-image.svg";
import { ImageEditor } from "./ImageEditor";
import useDeviceType from "../../../../components/useDeviceType";

type ProfilePictureProps = {
  profilePicture: string | undefined;
  setProfilePicture: React.Dispatch<React.SetStateAction<string | undefined>>;
  isEditorActive: boolean;
  setIsEditorActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ProfilePicture({
  profilePicture,
  setProfilePicture,
  isEditorActive,
  setIsEditorActive,
}: ProfilePictureProps) {
  const { isMobile } = useDeviceType();
  const [temporaryPicture, setTemporaryPicture] = React.useState<
    string | undefined
  >();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const image = new Image();
      image.src = imageUrl;

      image.onload = function () {
        const width = image.width;
        const height = image.height;

        if (width <= 1024 && height <= 1024) {
          setIsEditorActive(true);
          setTemporaryPicture(imageUrl);
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
      orientation={isMobile ? "vertical" : "horizontal"}
      align={isMobile ? "start" : "center"}
      className={styles.box}
      gap="16px"
    >
      <Text type="body" size="m" color="grey" className={styles.width}>
        Profile picture
      </Text>
      <Stack
        gap="24px"
        align={isMobile ? "start" : "center"}
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        <div className={styles.buttonBox}>
          {isEditorActive ? (
            <ImageEditor
              picture={profilePicture}
              temporaryPicture={temporaryPicture}
              setPicture={setProfilePicture}
              setIsActive={setIsEditorActive}
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
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Uploaded Profile Avatar"
                      className={styles.image}
                      id="imageContainer"
                    />
                  ) : null}
                  <Stack
                    orientation="vertical"
                    align="center"
                    gap="8px"
                    className={styles.content}
                  >
                    <UploadIcon
                      className={
                        profilePicture ? `${styles[`icon-white`]}` : styles.icon
                      }
                    />
                    <Text
                      color={profilePicture ? "white" : "purple"}
                      type="heading"
                      size="s"
                    >
                      {profilePicture ? "Change Image" : "+ Upload Image"}
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
