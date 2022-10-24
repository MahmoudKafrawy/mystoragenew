import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputText } from "../../components/controlled/FormInputText";
import { useTranslation } from "next-i18next";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./signUpForm.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import countries from "../../common/countries";

const accountType = ["export freight", "Shipping releases", "export customs", "Customs Publications"];
const SignUpForm = () => {
  return (
    <>
      <Box className={styles.parent}>
        <Box className={styles.gradient}>
          <Box className={styles.paper}>
            <Box className={styles.title}>Sign up</Box>
            <Box className={styles.divider}></Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box>
                  <Typography className={styles.subTitle}>First name</Typography>
                  <TextField placeholder="Your First name" type="text" fullWidth={true} size="small" />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Typography className={styles.subTitle}>Last name</Typography>
                  <TextField placeholder="Your Last name" type="text" fullWidth={true} size="small" />
                </Box>
              </Grid>
            </Grid>
            <Typography className={styles.subTitle}>Phone</Typography>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Select
                  autoWidth
                  size="small"
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value="test"
                  // value={age}
                  // onChange={handleChange}
                  sx={{ minWidth: "90%" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country.name} value={10}>{`${country.flag}${country.dial_code}`}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={10}>
                <TextField type="text" size="small" fullWidth={true} />
              </Grid>
            </Grid>
            <Box>
              <Typography className={styles.subTitle}>Account type</Typography>
              <FormControl>
                {/* <FormLabel id="demo-row-radio-buttons-group-label">Account type</FormLabel> */}
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                  {accountType.map((item) => (
                    <FormControlLabel value={item} control={<Radio />} label={item} className={styles.radioText} />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
            <Typography className={styles.subTitle}>National ID</Typography>
            <TextField type="text" fullWidth={true} size="small" />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Previews title="Front National ID" />
              </Grid>
              <Grid item xs={6}>
                <Previews title="Back National ID" />
              </Grid>
            </Grid>
            <Box>
              <Typography className={styles.subTitle}>Commercial Record Number</Typography>
              <Previews title="Browse" />
            </Box>
            <Box>
              <Typography className={styles.subTitle}>Tax Card Number</Typography>
              <Previews title="Browse" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button className={styles.button}>Send</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUpForm;

import { useMemo } from "react";

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

// function StyledDropzone() {
//   const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
//     accept: { "image/*": [] },
//   });

// const style: any = useMemo(
//   () => ({
//     ...baseStyle,
//     ...(isFocused ? focusedStyle : {}),
//     ...(isDragAccept ? acceptStyle : {}),
//     ...(isDragReject ? rejectStyle : {}),
//   }),
//   [isFocused, isDragAccept, isDragReject]
// );

//   return (
//     <div className="container">
//       <div {...getRootProps({ style })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer: any = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const thumb: any = {
  display: "inline-flex",
  borderRadius: 2,
  // border: "1px solid #eaeaea",
  marginBottom: 4,
  marginRight: 4,
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
}
function Previews({ title }: PreviewsProps) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
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

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

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
        <input {...getInputProps()} />
        {files.length < 1 && (
          <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CloudUploadIcon />
            {title}
          </Stack>
        )}
      </div>
    </section>
  );
}

// {...getRootProps({ className: "dropzone" })}
