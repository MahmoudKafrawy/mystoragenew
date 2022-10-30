import React, { Suspense } from "react";
import { Container } from "@mui/material";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Carousel from "../page-sections/Home/Carousel";
// import Services from "../page-sections/Home/Services";
// import HowItWorks from "../page-sections/Home/HowItWorks";
// import OurWareHouseLocation from "../page-sections/Home/OurWareHouseLocation";
const Services = React.lazy(() => import("../page-sections/Home/Services"));
const HowItWorks = React.lazy(() => import("../page-sections/Home/HowItWorks"));
const OurWareHouseLocation = React.lazy(() => import("../page-sections/Home/OurWareHouseLocation"));

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <Carousel />
      <Container maxWidth="lg">
        <Suspense fallback={<div>Loading</div>}>
          <Services />
          <HowItWorks />
          <OurWareHouseLocation />
        </Suspense>
      </Container>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "nav", "carousel", "home"])),
    },
  };
};
