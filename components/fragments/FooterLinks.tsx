import { Box } from "@mui/material";
import React from "react";
import styles from "./FooterLinks.module.scss";
interface FooterLinksProps {
  title: string;
}
const FooterLinks: React.FC<FooterLinksProps> = ({ title }) => {
  return <Box className={styles.button}>{title}</Box>;
};

export default FooterLinks;
