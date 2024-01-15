import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../components/Stack";
import { Text } from "../../../../components/Text";
import { ReactComponent as UploadIcon } from "../../../../images/icon-upload-image.svg";
import { useUserContext } from "../../../../context";
import AvatarEditor from "react-avatar-editor";

type EditorProps = {
  picture: any;
  setPicture: React.Dispatch<
    React.SetStateAction<HTMLCanvasElement | string | undefined>
  >;
};

function Editor({ picture, setPicture }: EditorProps) {
  const editorRef = React.useRef<any>(null);

  const handleSave = () => {
    const canvas = editorRef.current.getImageScaledToCanvas();
    const dataURL = canvas.toDataURL();
    setPicture(dataURL);
  };

  return picture !== undefined ? (
    <Stack orientation="vertical">
      {typeof picture === "string" ? (
        <AvatarEditor ref={editorRef} image={picture} />
      ) : (
        <AvatarEditor ref={editorRef} image={picture.toDataURL()} />
      )}
      <button type="button" onClick={handleSave}>
        Done
      </button>
    </Stack>
  ) : null;
}

export function ProfilePicture() {
  const { userData, setUserData } = useUserContext();
  const [picture, setPicture] = React.useState<
    HTMLCanvasElement | string | undefined | any
  >(undefined);
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
          console.log(image);
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
        {isActive ? <Editor picture={picture} setPicture={setPicture} /> : null}
        <Text type="body" size="s" color="grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </Text>
      </Stack>
    </Stack>
  );
}
