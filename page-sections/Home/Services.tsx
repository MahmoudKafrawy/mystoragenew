import { Box, Stack, Grid } from "@mui/material";
import React from "react";
import ServicesCard from "../../components/custom/home/ServicesCard";
import styles from "./Sections.module.scss";

const servicesCardPhotos = ["1", "2", "3", "4"];

const Services = () => {
  return (
    <Stack spacing={2} className={styles.parent}>
      <Box className={styles.title}>Our Services</Box>
      <Box className={styles.paragraph}>
        Because you are special ,MY storage provides you value added services to meet customer needs that will help you
        reduce your costs and improve your shipping experience
      </Box>
      <Box className={styles.divider}></Box>
      <Grid container className={styles.cards}>
        {servicesCardPhotos.map((item) => (
          <Grid key={item} item xs={6} md={3} className={styles.parent}>
            <ServicesCard title="test" paragraph="test" img={`/images/services/${item}.png`} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Services;
