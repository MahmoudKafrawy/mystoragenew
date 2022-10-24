import { Button } from "@mui/material";
import React from "react";
import styles from "./NavBarButton.module.css";

interface NavBarButtonProps {
  title: string;
}
const NavBarButton: React.FC<NavBarButtonProps> = ({ title }) => {
  if (title === "Calculate") {
    return <Button className={styles.calculateButton}>{title}</Button>;
  }
  return <Button className={styles.button}>{title}</Button>;
};

export default NavBarButton;
