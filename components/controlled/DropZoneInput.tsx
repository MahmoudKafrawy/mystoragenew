import { useMemo } from "react";
import React, { useCallback } from "react";
import { CloudUpload, DeleteForever } from "@mui/icons-material";
import styles from "./DropZoneInput.module.scss";
import { useFormContext } from "react-hook-form";
import { Stack } from "@mui/material";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px",
  margin: "10px 0px",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#878990",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface PreviewsProps {
  title: string;
  name: string;
  error: string | undefined;
}

function DropZoneInput({ title, name, error }: PreviewsProps) {
  const { register, unregister, setValue, watch, reset } = useFormContext();
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (droppedFiles: any) => {
      setFiles(
        droppedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setValue(name, droppedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );
  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
  });

  const thumbs = files.map((file: any) => (
    <div className={styles.thumb} key={file.name}>
      <div className={styles.thumbInner}>
        <img
          // src={URL.createObjectURL(file)}
          src={file.preview}
          className={styles.img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <div className={styles.thumbDelete}>
          <DeleteForever
            onClick={() => {
              setFiles([]);
              reset();
            }}
          />
        </div>
      </div>
    </div>
  ));

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  console.log(getInputProps());

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <aside className={styles.thumbsContainer}>{thumbs}</aside>
        {isDragActive && <p>Drop Here</p>}
        <input name={name} {...getInputProps()} />
        {files.length < 1 && !isDragActive ? (
          <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
            <CloudUpload />
            {title}
          </Stack>
        ) : null}
      </div>
      {error && <p className={styles.errorMsg}>{error}</p>}
    </section>
  );
}
export default DropZoneInput;
