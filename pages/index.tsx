import { Container } from "@mui/system";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Carousel from "../page-sections/Home/Carousel";
import HowItWorks from "../page-sections/Home/HowItWorks";
import OurWareHouseLocation from "../page-sections/Home/OurWareHouseLocation";
import Services from "../page-sections/Home/Services";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <Carousel />
      <Container maxWidth="lg">
        <Services />
        <HowItWorks />
        <OurWareHouseLocation />
      </Container>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "nav"])),
    },
  };
};
