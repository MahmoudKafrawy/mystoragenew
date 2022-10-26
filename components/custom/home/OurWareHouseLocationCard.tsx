import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "./OurWareHouseLocationCard.module.scss";

interface OurWareHouseLocationCardProps {
  title: string;
}
const OurWareHouseLocationCard: React.FC<OurWareHouseLocationCardProps> = ({ title }) => {
  return (
    <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Image src={`/images/warehouse/${title}.png`} width="145px" height="237px" alt="" />
      <Typography className={styles.title}>{title}</Typography>
    </Stack>
  );
};

export default OurWareHouseLocationCard;
