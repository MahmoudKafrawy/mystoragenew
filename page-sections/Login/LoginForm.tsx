import { Box, Button, Checkbox, FormControlLabel, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./LoginForm.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required("Please enter email").email("Enter Valid email"),
    password: yup.string().required("Please enter password"),
  })
  .required();

const LoginFrom = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (errors) => console.log(errors);
  const { t } = useTranslation();

  // console.log(watch("email")) // watch input value by passing the name of it

  return (
    <>
      <Box className={styles.parent}>
        <Box className={styles.gradient}>
          <Box className={styles.paper}>
            <Box className={styles.title}>Login</Box>
            <Box className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, modi as
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className={styles.inputGroup}>
                <TextField
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                  variant="standard"
                  fullWidth={true}
                  error={errors?.email ? true : false}
                  helperText={errors?.email ? errors.email.message : null}
                  sx={{ backgroundColor: "transparent", height: 40 }}
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.email && <p className={styles.errorMsg}></p>}
                <TextField
                  {...register("password")}
                  type="password"
                  placeholder="password"
                  variant="standard"
                  fullWidth={true}
                  error={errors?.password ? true : false}
                  helperText={errors.password ? errors.password.message : null}
                  style={{ backgroundColor: "transparent", height: 40 }}
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && <p className={styles.errorMsg}></p>}
              </Box>
              <Box className={styles.loginOptions}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                <Box>Forget Password?</Box>
              </Box>
              <Box sx={{ margin: 1, display: "flex", justifyContent: "center" }}>
                <Button sx={{ bgcolor: "primary.main", color: "white", fontFamily: "Ubuntu" }} type="submit">
                  Login
                </Button>
                {/* <Button sx={{ bgcolor: "white", color: "#999ca3", fontFamily: "Ubuntu" }}>Create Account</Button> */}
              </Box>
            </form>
            <Box className={styles.signUp}>
              Don't have an account?
              <Link href="/signup">
                <p className={styles.signUpButton}>Sign up</p>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default LoginFrom;
