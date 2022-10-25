import { Box, Stack } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "./servicesCard.module.css";

interface ServicesCardProps {
  title: string;
  paragraph: string;
  img: string;
}
const ServicesCard: React.FC<ServicesCardProps> = ({ title, paragraph, img }) => {
  return (
    <Stack className={styles.parent}>
      <Box className={styles.img}>
        <Image src={img} width="35" height="35" alt="" />
      </Box>
      <Box className={styles.title}>Personalized address</Box>
      <Box className={styles.paragraph}>My storage offers you an address to receive your package</Box>
    </Stack>
  );
};

export default ServicesCard;
