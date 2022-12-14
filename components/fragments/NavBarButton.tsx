import { Button } from "@mui/material";
import React from "react";
import styles from "./NavBarButton.module.scss";

interface NavBarButtonProps {
  title: string;
}
const NavBarButton: React.FC<NavBarButtonProps> = ({ title }) => {
  if (title === "Calculate" || title === "حساب التكلفة") {
    return <Button classes={{ root: styles.calculateButton }}>{title}</Button>;
  }
  return (
    <Button sx={{ display: { xs: "none", sm: "block" } }} className={styles.button}>
      {title}
    </Button>
  );
};

export default NavBarButton;
