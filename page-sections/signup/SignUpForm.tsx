import React, { useCallback } from "react";
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
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormInputText } from "../../components/controlled/FormInputText";
import { useTranslation } from "next-i18next";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./SignUpForm.module.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import countries from "../../common/countries";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignUpForm = () => {
  const accountType = ["export freight", "Shipping releases", "export customs", "Customs Publications"];

  type Inputs = {
    firstName: string;
    lastName: string;
    phone: number;
    accountType: string;
    nationalID: number;
    email: string;
    password: string;
    taxCard: FileList;
    frontID: FileList;
    backID: FileList;
    CommercialNumber: FileList;
  };

  const schema = yup
    .object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      phone: yup.string().required("Phone is required"),
      accountType: yup.string().required("Please Choose Type").nullable(),
      nationalID: yup.string().required("National ID number required"),
      frontID: yup.array().required("Please upload Front ID"),
      backID: yup.array().required("Please upload Back ID"),
      CommercialNumber: yup.array().required("Please upload Commercial Card"),
      taxCard: yup.array().required("Please upload Tax Card"),
    })
    .required();

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const methods = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const { t } = useTranslation();

  // console.log(methods.watch("taxCard"));

  return (
    <>
      <Box className={styles.parent}>
        <Box className={styles.gradient}>
          <Box className={styles.paper}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Box className={styles.title}>Sign up</Box>
                <Box className={styles.divider}></Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography className={styles.subTitle}>First name</Typography>
                      <TextField
                        placeholder="Your First name"
                        type="text"
                        fullWidth={true}
                        size="small"
                        {...methods.register("firstName")}
                        error={methods.formState.errors?.firstName ? true : false}
                        helperText={
                          methods.formState.errors?.firstName ? methods.formState.errors.firstName.message : null
                        }
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Typography className={styles.subTitle}>Last name</Typography>
                      <TextField
                        placeholder="Your Last name"
                        type="text"
                        fullWidth={true}
                        size="small"
                        {...methods.register("lastName")}
                        error={methods.formState.errors?.lastName ? true : false}
                        helperText={
                          methods.formState.errors?.lastName ? methods.formState.errors.lastName.message : null
                        }
                      />
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
                      // value="test"
                      // value={age}
                      // onChange={handleChange}
                      sx={{ minWidth: "90%" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {countries.map((country) => (
                        <MenuItem key={country.name}>{`${country.flag}${country.dial_code}`}</MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      type="text"
                      size="small"
                      fullWidth={true}
                      {...methods.register("phone")}
                      error={methods.formState.errors?.phone ? true : false}
                      helperText={methods.formState.errors?.phone ? methods.formState.errors.phone.message : null}
                    />
                  </Grid>
                </Grid>
                <Box>
                  <Typography className={styles.subTitle}>Account type</Typography>
                  <FormControl>
                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Account type</FormLabel> */}
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                      {accountType.map((item) => (
                        <FormControlLabel
                          key={item}
                          value={item}
                          control={<Radio />}
                          label={item}
                          className={styles.radioText}
                          {...methods.register("accountType")}
                        />
                      ))}
                    </RadioGroup>
                    {methods.formState.errors.accountType ? (
                      <p className={styles.errorMsg}>{methods.formState.errors.accountType.message}</p>
                    ) : null}
                  </FormControl>
                </Box>
                <Typography className={styles.subTitle}>National ID</Typography>
                <TextField
                  type="text"
                  fullWidth={true}
                  size="small"
                  {...methods.register("nationalID")}
                  error={methods.formState.errors?.nationalID ? true : false}
                  helperText={methods.formState.errors?.nationalID ? methods.formState.errors.nationalID.message : null}
                />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Previews
                      title="Front National ID"
                      name="frontID"
                      // register={{ ...register("frontID") }}
                      error={methods.formState.errors.frontID?.message?.toString()}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Previews
                      title="Back National ID"
                      name="backID"
                      // register={{ ...register("backID") }}
                      error={methods.formState.errors.backID?.message?.toString()}
                    />
                  </Grid>
                </Grid>
                <Box>
                  <Typography className={styles.subTitle}>Commercial Record Number</Typography>
                  <Previews
                    title="Browse"
                    // register={{ ...register("CommercialNumber") }}
                    name="CommercialNumber"
                    error={methods.formState.errors.CommercialNumber?.message?.toString()}
                  />
                </Box>
                <Box>
                  <Typography className={styles.subTitle}>Tax Card Number</Typography>
                  <Previews
                    title="Browse"
                    // register={{ ...register("taxCard") }}
                    name="taxCard"
                    error={methods.formState.errors.taxCard?.message?.toString()}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button className={styles.button} type="submit">
                    Send
                  </Button>
                </Box>
              </form>
            </FormProvider>
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
import { useFormContext } from "react-hook-form";

function Previews({ title, name, error }: PreviewsProps) {
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

// {...getRootProps({ className: "dropzone" })}
