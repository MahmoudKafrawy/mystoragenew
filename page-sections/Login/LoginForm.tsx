import { Box, Button, Checkbox, FormControlLabel, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./LoginForm.module.scss";
import { Email, Lock } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

type Inputs = {
  email: string;
  password: string;
};

const schema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.email": "Please enter valid email",
      "string.empty": "Please enter email",
    }),
  password: Joi.string().required().messages({
    "string.empty": "Please enter password",
  }),
});

// const schema = yup
//   .object({
//     email: yup.string().email("Enter Valid email").required("Please enter email"),
//     password: yup.string().required("Please enter password"),
//   })
//   .required();

const LoginFrom = () => {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: joiResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem("user", `${data.email},${data.password}`);
    console.log("Done ");
    router.push("/account");
  };
  const { t } = useTranslation();

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
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.email && <p className={styles.errorMsg}></p>}
                <TextField
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  variant="standard"
                  fullWidth={true}
                  error={errors?.password ? true : false}
                  helperText={errors.password ? errors.password.message : null}
                  style={{ backgroundColor: "transparent", height: 40 }}
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
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
                <Button className={styles.button} type="submit">
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
