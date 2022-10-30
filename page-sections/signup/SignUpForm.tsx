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
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./SignUpForm.module.scss";
import countries from "../../common/countries";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import DropZoneInput from "../../components/controlled/DropZoneInput";

const SignUpForm = () => {
  const accountType = ["Export freight", "Shipping releases", "Export customs", "Customs Publications"];

  type Inputs = {
    firstName: string;
    lastName: string;
    phone: number;
    countryCode: number;
    accountType: string;
    nationalID: number;
    email: string;
    password: string;
    taxCard: FileList;
    frontID: FileList;
    backID: FileList;
    CommercialNumber: FileList;
  };

  const schema = Joi.object({
    firstName: Joi.string().empty().required().messages({
      "string.empty": "Please enter first name",
    }),
    lastName: Joi.string().empty().required().messages({
      "string.empty": "Please enter last name",
    }),
    phone: Joi.string().empty().required().messages({
      "string.empty": "Please enter Phone",
    }),
    countryCode: Joi.string().required().messages({
      "any.required": "Please select code",
    }),
    accountType: Joi.string().empty().required().messages({
      "string.base": "Please select account type",
    }),
    nationalID: Joi.string().empty().length(14).required().messages({
      "string.length": "ID must be 14 number",
      "string.empty": "Please Enter national id",
    }),
    frontID: Joi.array().required().messages({
      "any.required": "Please upload front ID ",
    }),
    backID: Joi.array().required().messages({
      "any.required": "Please upload back ID ",
    }),
    CommercialNumber: Joi.array().required().messages({
      "any.required": "Please upload Commercial number ",
    }),
    taxCard: Joi.array().required().messages({
      "any.required": "Please upload tax card ",
    }),
  });

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const methods = useForm<Inputs>({ resolver: joiResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const { t } = useTranslation();

  // console.log(methods.watch("countryCode"));

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
                <Grid container direction="row" spacing={1}>
                  <Grid item xs={3}>
                    <TextField
                      select
                      fullWidth={true}
                      size="small"
                      inputProps={methods.register("countryCode")}
                      error={methods.formState.errors.countryCode ? true : false}
                      helperText={methods.formState.errors.countryCode?.message}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.dial_code}>
                          {country.flag} {country.dial_code}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      fullWidth={true}
                      type="number"
                      size="small"
                      {...methods.register("phone")}
                      error={methods.formState.errors?.phone ? true : false}
                      helperText={methods.formState.errors?.phone ? methods.formState.errors.phone.message : null}
                    />
                  </Grid>
                </Grid>
                <Box>
                  <Typography className={styles.subTitle}>Account type</Typography>
                  <FormControl>
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
                  type="number"
                  fullWidth={true}
                  size="small"
                  {...methods.register("nationalID")}
                  error={methods.formState.errors?.nationalID ? true : false}
                  helperText={methods.formState.errors?.nationalID ? methods.formState.errors.nationalID.message : null}
                />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <DropZoneInput
                      title="Front National ID"
                      name="frontID"
                      error={methods.formState.errors.frontID?.message?.toString()}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DropZoneInput
                      title="Back National ID"
                      name="backID"
                      error={methods.formState.errors.backID?.message?.toString()}
                    />
                  </Grid>
                </Grid>
                <Box>
                  <Typography className={styles.subTitle}>Commercial Record Number</Typography>
                  <DropZoneInput
                    title="Browse"
                    name="CommercialNumber"
                    error={methods.formState.errors.CommercialNumber?.message?.toString()}
                  />
                </Box>
                <Box>
                  <Typography className={styles.subTitle}>Tax Card Number</Typography>
                  <DropZoneInput
                    title="Browse"
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
