import styles from "./index.module.scss";
import * as React from "react";
import { Stack } from "../../../../../components/Stack";
import AvatarEditor from "react-avatar-editor";
import { Button } from "../../../../../components/Button";

type ImageEditorProps = {
  picture: any;
  setPicture: React.Dispatch<
    React.SetStateAction<HTMLCanvasElement | string | undefined>
  >;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ImageEditor({
  picture,
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

  return picture !== undefined ? (
    <Stack orientation="vertical">
      {typeof picture === "string" ? (
        <AvatarEditor
          ref={editorRef}
          image={picture}
          width={193}
          height={193}
          borderRadius={16}
          className={styles.position}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <AvatarEditor ref={editorRef} image={picture.toDataURL()} />
      )}
      <div className={styles.button}>
        <Button colorScheme="primary" type="button" onClick={handleSave}>
          Done
        </Button>
      </div>
    </Stack>
  ) : null;
}
