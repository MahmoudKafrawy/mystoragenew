import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import LoginFrom from "../page-sections/Login/LoginForm";

const login = () => {
  return <LoginFrom />;
};

export default login;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "nav"])),
    },
  };
};
