import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import HowItWorksCard from "../../components/custom/home/HowItWorksCard";
import styles from "./Sections.module.scss";
import { useTranslation } from "next-i18next";

const howItWorksPhotos = ["1", "2", "3", "4"];
const HowItWorks = () => {
  const { t } = useTranslation("home");

  return (
    <Stack spacing={2} className={styles.parent}>
      <Box className={styles.title}>{t("howitworks.title")}</Box>
      <Box className={styles.paragraph}>{t("howitworks.paragraph")}</Box>
      <Box className={styles.divider}></Box>
      <Grid container className={styles.cards}>
        {howItWorksPhotos.map((item) => (
          <Grid key={item} item xs={6} md={3} className={styles.parent}>
            <HowItWorksCard key={item} title={`0${item}`} paragraph="test" img={`/images/howitworks/${item}.png`} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default HowItWorks;
