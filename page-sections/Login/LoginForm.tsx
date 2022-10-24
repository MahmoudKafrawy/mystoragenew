import { Box, Button, Checkbox, FormControlLabel, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputText } from "../../components/controlled/FormInputText";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./LoginForm.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

const LoginFrom = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
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
            <Box className={styles.inputGroup}>
              {/* <Box className={styles.input}>
                <EmailIcon sx={{ color: "#999ca3" }} />
                <TextField variant="filled" label="Email" fullWidth={true} InputProps={{ disableUnderline: true }} />
              </Box> */}
              <TextField
                type="Email"
                placeholder="Email"
                variant="standard"
                fullWidth={true}
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
              <TextField
                type="password"
                placeholder="password"
                variant="standard"
                fullWidth={true}
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
              {/* <Box className={styles.input}>
                <LockIcon sx={{ color: "#999ca3" }} />
                <TextField variant="filled" label="Password" fullWidth={true} InputProps={{ disableUnderline: true }} />
              </Box> */}
            </Box>
            <Box className={styles.loginOptions}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                sx={{ fontFamily: "Ubuntu" }}
                label="Remember Me"
              />
              <Box>Forget Password?</Box>
            </Box>
            <Box sx={{ margin: 1 }}>
              <Button sx={{ bgcolor: "orange", color: "white", fontFamily: "Ubuntu" }}>Login</Button>
              <Button sx={{ bgcolor: "white", color: "#999ca3", fontFamily: "Ubuntu" }}>Create Account</Button>
            </Box>
            <Box className={styles.signUp}>
              Don't have an account?
              <Link href="/signup">
                <p style={{ color: "orange", fontWeight: 500, cursor: "pointer" }}>Sign up</p>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default LoginFrom;

// interface IconTextFieldProps{
//   label:string
//   iconStart:any,
// }
// const IconTextField:React.FC<IconTextFieldProps> = ({ label,iconStart,   ...props }) => {
//   return (
//     <TextField
//       className={styles.input}
//       variant="filled"
//       label={label}
//       {...props}
//       InputProps={{
//         startAdornment: iconStart ? (
//           <InputAdornment position="start">{iconStart}</InputAdornment>
//         ) : null,
//       }}
//     />
//   );
// };

// <Typography variant="h6" component="h6">
// {t('actions.login')}
// </Typography>
// <form onSubmit={handleSubmit(onSubmit)}>
//   <FormInputText  id="email" label='email' control={control} {...register("email",{required:true})}/>
//   {errors.email && <p>This field is required</p>}
//   <FormInputText  id="password" label='password' control={control} {...register("password",{required:true})}/>
//   {/* {errors.password && <p>This field is required</p>} */}
//   <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//           >Sign In</Button>
// </form>
