import { InsertEmoticonSharp } from "@mui/icons-material";
import { Box, Stack, Grid } from "@mui/material";
import React from "react";
import OurWareHouseLocationCard from "../../components/custom/home/OurWareHouseLocationCard";
import styles from "./Sections.module.scss";

const wareHouseCountries = ["USA", "UK", "UAE", "CHINA", "TURKEY"];
const OurWareHouseLocation = () => {
  return (
    <Stack spacing={2} className={styles.parent}>
      <Box className={styles.title}>Our Warehouse Locations</Box>
      <Box className={styles.paragraph}>
        Because you are special ,MY storage provides you value added services to meet customer needs that will help you
        reduce your costs and improve your shipping experience
      </Box>
      <Box className={styles.divider}></Box>
      <Grid container className={styles.cards}>
        {wareHouseCountries.map((item) => (
          <Grid key={item} item xs={1}>
            <OurWareHouseLocationCard key={item} title={item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default OurWareHouseLocation;
