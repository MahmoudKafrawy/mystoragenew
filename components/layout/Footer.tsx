import React from "react";
import { Box, Grid, Container } from "@mui/material";
import styles from "./Footer.module.scss";
import FooterLinks from "../fragments/FooterLinks";
import { Stack } from "@mui/system";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className={styles.parent}>
      <Container maxWidth="lg">
        <Box>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={3} sx={{ justifySelf: "center", fontWeight: 500 }}>
              MY STORAGE
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack sx={{ justifySelf: "center", fontWeight: 500 }}>
                ABOUT
                <FooterLinks title={"Our Story"} />
                <FooterLinks title={"Contact Us"} />
                <FooterLinks title={"Terms And Conditions"} />
                <FooterLinks title={"FAQs"} />
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack sx={{ justifySelf: "center", fontWeight: 500 }}>
                LEGAL
                <FooterLinks title={"Privacy Policy"} />
                <FooterLinks title={"Terms of use"} />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sx={{ justifySelf: "center", fontWeight: 500 }}>
              <Stack>
                FOLLOW US
                <Box sx={{ marginTop: "4px" }}>
                  <Facebook />
                  <Twitter />
                  <Instagram />
                  <LinkedIn />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12} className={styles.copyRight}>
              My storage is online shipping delivery services from Gebhaly | Copyright 2022Gebhaly international LLC{" "}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
