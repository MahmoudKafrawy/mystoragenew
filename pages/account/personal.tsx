import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Wrapper from ".";
import { Requester } from "../../API/Requester";
import Personal from "../../page-sections/account/Personal";
import { users } from "../../API/endpoints/account";

const personal = () => {
  return (
    <Wrapper>
      <Requester URL={users} />
      <Personal />
    </Wrapper>
  );
};

export default personal;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "account", "nav"])),
    },
  };
};
