import { Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./howItWorksCard.module.css";

interface HowItWorksCardProps {
  title: string;
  paragraph: string;
  img: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ title, img, paragraph }) => {
  return (
    <Box className={styles.card}>
      <div className={styles.number}>{title}</div>
      <Image src={img} width="100" height="100" className={styles.img} alt="" />
      <Typography>{paragraph}</Typography>
    </Box>
  );
};

export default HowItWorksCard;
