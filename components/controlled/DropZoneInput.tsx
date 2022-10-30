import { useMemo } from "react";
import React, { useCallback } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styles from "./SignUpForm.module.scss";
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

const thumbsContainer: any = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const thumb: any = {
  display: "flex",
  justifyContent: "center",
  borderRadius: 2,
  // border: "1px solid #eaeaea",
  marginBottom: 3,
  marginRight: 3,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
interface PreviewsProps {
  title: string;
  // register: any;
  name: string;
  error: string | undefined;
}

function DropZoneInput({ title, name, error }: PreviewsProps) {
  const { register, unregister, setValue, watch } = useFormContext();
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
  // const files = watch(name);
  // console.log(files);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
    // onDrop: (acceptedFiles: any) => {
    //   setValue(name, acceptedFiles, { shouldValidate: true });
    //   setFiles(
    //     acceptedFiles.map((file: any) =>
    //       Object.assign(file, {
    //         preview: URL.createObjectURL(file),
    //       })
    //     )
    //   );
    // },
  });
  const thumbs = files.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          // src={URL.createObjectURL(file)}
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  // }, []);

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <aside style={thumbsContainer}>{thumbs}</aside>
        {isDragActive && <p>Drop Here</p>}
        <input name={name} {...getInputProps()} />
        {files.length < 1 && !isDragActive ? (
          <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
            <CloudUploadIcon />
            {title}
          </Stack>
        ) : null}
      </div>
      {error && <p className={styles.errorMsg}>{error}</p>}
    </section>
  );
}
export default DropZoneInput;

// {...getRootProps({ className: "dropzone" })}
