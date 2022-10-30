import { InsertEmoticonSharp } from "@mui/icons-material";
import { Box, Stack, Grid } from "@mui/material";
import React from "react";
import OurWareHouseLocationCard from "../../components/custom/home/OurWareHouseLocationCard";
import styles from "./Sections.module.scss";
import { useTranslation } from "next-i18next";

const wareHouseCountries = ["USA", "UK", "UAE", "CHINA", "TURKEY"];
const OurWareHouseLocation = () => {
  const { t } = useTranslation("home");

  return (
    <Stack spacing={2} className={styles.parent}>
      <Box className={styles.title}>{t("ourwarehouse.title")}</Box>
      <Box className={styles.paragraph}>{t("ourwarehouse.paragraph")}</Box>
      <Box className={styles.divider}></Box>
      <Grid container className={styles.cards} sx={{ marginBottom: 600 }}>
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
