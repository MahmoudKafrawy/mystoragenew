import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Fade, Grid } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ children }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <div>
      <Button onClick={handleOpen}>
        <Typography sx={{ color: "white" }}>{t("actions.login")}</Typography>
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Paper sx={style}>
                {children}
                {/* <HookForm/> */}
                {/* <LoginForm/> */}
                <Link href="/signup">sign up</Link>
              </Paper>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </div>
  );
};

export default BasicModal;
