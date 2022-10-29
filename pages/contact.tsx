import { Box } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const contact = () => {
  return <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Contact</Box>;
};

export default contact;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "nav", "carousel"])),
    },
  };
};
