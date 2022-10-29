import { Box } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const calculate = () => {
  return <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>calculate</Box>;
};

export default calculate;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "nav", "carousel"])),
    },
  };
};
