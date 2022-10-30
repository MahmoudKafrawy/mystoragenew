import { Box, Stack, Grid } from "@mui/material";
import React from "react";
import ServicesCard from "../../components/custom/home/ServicesCard";
import styles from "./Sections.module.scss";
import { useTranslation } from "next-i18next";
const servicesCardPhotos = ["1", "2", "3", "4"];

const Services = () => {
  const { t } = useTranslation("home");
  return (
    <Stack spacing={2} className={styles.parent}>
      <Box className={styles.title}>{t("services.title")}</Box>
      <Box className={styles.paragraph}>{t("services.paragraph")}</Box>
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
