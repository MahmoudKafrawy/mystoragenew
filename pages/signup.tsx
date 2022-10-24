import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import SignUpForm from "../page-sections/signup/SignUpForm";

const signup = () => {
  return <SignUpForm />;
};

export default signup;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "nav"])),
    },
  };
};
