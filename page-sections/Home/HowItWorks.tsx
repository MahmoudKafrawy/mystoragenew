import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import HowItWorksCard from "../../components/custom/home/HowItWorksCard";
import styles from "./sections.module.css";

const howItWorksPhotos = ["1", "2", "3", "4"];
const HowItWorks = () => {
  return (
    <Stack spacing={2} className={styles.parent}>
      <Box className={styles.title}>How it works</Box>
      <Box className={styles.paragraph}>
        Shop your favorite online from USA,UK,Tukey,China,UAE and leave the rest to us. Once we receive your package at
        our warehouse ,we can handle international shipping, customs clearance and deliver your products to anywhere in
        Egypt!
      </Box>
      <Box className={styles.divider}></Box>
      <Grid container className={styles.cards}>
        {howItWorksPhotos.map((item) => (
          <Grid item xs={6} md={3} className={styles.parent}>
            <HowItWorksCard key={item} title={`0${item}`} paragraph="test" img={`/images/howitworks/${item}.png`} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default HowItWorks;
