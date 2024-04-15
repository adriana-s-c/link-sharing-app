import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../../components/Stack";
import AvatarEditor from "react-avatar-editor";
import { Button } from "../../../../../components/Button";

type ImageEditorProps = {
  picture: string | undefined;
  temporaryPicture: string | undefined;
  setPicture: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ImageEditor({
  picture,
  temporaryPicture,
  setPicture,
  setIsActive,
}: ImageEditorProps) {
  const editorRef = React.useRef<any>(null);

  const handleSave = () => {
    const canvas = editorRef.current.getImageScaledToCanvas();
    const dataURL = canvas.toDataURL();
    setPicture(dataURL);
    setIsActive(false);
  };

  const handleCancel = () => {
    setPicture(picture);
    setIsActive(false);
  };

  return temporaryPicture ? (
    <Stack orientation="vertical">
      <AvatarEditor
        ref={editorRef}
        image={temporaryPicture}
        width={193}
        height={193}
        borderRadius={16}
        className={styles.position}
        style={{
          width: "100%",
          height: "100%",
          minWidth: "193px",
          minHight: "193px",
        }}
      />
      <Stack className={styles.button}>
        <Button colorScheme="secondary" type="button" onClick={handleCancel}>
          Cancel
        </Button>
        <Button colorScheme="primary" type="button" onClick={handleSave}>
          Done
        </Button>
      </Stack>
    </Stack>
  ) : null;
}
