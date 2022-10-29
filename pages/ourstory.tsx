import { Box } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const ourstory = () => {
  return <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Our Story</Box>;
};

export default ourstory;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "nav", "carousel"])),
    },
  };
};
