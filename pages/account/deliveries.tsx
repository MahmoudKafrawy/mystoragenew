import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Wrapper from ".";
import Personal from "../../page-sections/account/Personal";

const deliveries = () => {
  return <Wrapper>deliveries</Wrapper>;
};

export default deliveries;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "account", "nav"])),
    },
  };
};
