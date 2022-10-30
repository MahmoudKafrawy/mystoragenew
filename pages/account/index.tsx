import * as React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Tabs, Tab, Box, Container } from "@mui/material";
import { AccountBox, LocalShipping, Inventory, Home, ExitToApp, AttachMoney, Paid } from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Wrapper = ({ children }: any) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { t } = useTranslation("account");

  const router = useRouter();

  React.useEffect(() => {
    if (router.pathname === "/account") {
      router.push("/account/personal");
    }
    switch (router.pathname) {
      case "/account/personal":
        setValue(0);
        break;
      case "/account/addresses":
        setValue(1);
        break;
      case "/account/cartons":
        setValue(2);
        break;
      case "/account/deliveries":
        setValue(3);
        break;
      case "/account/transactions":
        setValue(4);
        break;
      case "/account/wallet":
        setValue(5);
        break;
      case "logout":
        setValue(6);
        break;
      default:
        "/account/personal";
        setValue(0);
        break;
    }
  }, [router.asPath]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", minHeight: "100vh", marginTop: 3 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Link href="/account/personal" shallow>
            <a>
              <Tab
                label={
                  <div>
                    <AccountBox style={{ verticalAlign: "middle" }} /> {t("personal.personalAccount")}
                  </div>
                }
                {...a11yProps(0)}
              />
            </a>
          </Link>
          <Link href="/account/addresses" shallow>
            <a>
              <Tab
                label={
                  <div>
                    <Home style={{ verticalAlign: "middle" }} /> {t("addresses.address")}
                  </div>
                }
                {...a11yProps(1)}
              />
            </a>
          </Link>
          <Link href="/account/cartons" shallow>
            <a>
              <Tab
                label={
                  <div>
                    <Inventory style={{ verticalAlign: "middle" }} /> {t("cartons.carton")}
                  </div>
                }
                {...a11yProps(2)}
              />
            </a>
          </Link>
          <Link href="/account/deliveries" shallow>
            <a>
              <Tab
                label={
                  <div>
                    <LocalShipping style={{ verticalAlign: "middle" }} /> {t("deliveries.deliveries")}
                  </div>
                }
                {...a11yProps(3)}
              />
            </a>
          </Link>
          <Link href="/account/transactions" shallow>
            <a>
              <Tab
                label={
                  <div>
                    <Paid style={{ verticalAlign: "middle" }} /> {t("transactions.transactions")}
                  </div>
                }
                {...a11yProps(4)}
              />
            </a>
          </Link>
          <Link href="/account/wallet" shallow>
            <a>
              <Tab
                label={
                  <div>
                    <AttachMoney style={{ verticalAlign: "middle" }} /> {t("transactions.paymentMethods.Wallet")}
                  </div>
                }
                {...a11yProps(5)}
              />
            </a>
          </Link>
          <Link href="/logout" shallow>
            <a>
              <Tab
                label={
                  <div>
                    <ExitToApp style={{ verticalAlign: "middle" }} /> {t("addresses.address")}
                  </div>
                }
                {...a11yProps(6)}
              />
            </a>
          </Link>
        </Tabs>
        <TabPanel value={value} index={0}>
          {children}
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Wrapper;

// export const getStaticPaths = async () => {
//   const pages = ["", "personal", "addresses", "cartons", "deliveries", "transactions", "wallet", "logout"];
//   const paths = pages.map((id) => ({ params: { index: [id.toString()] } }));
//   return { paths, fallback: false };
// };

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "account", "nav"])),
    },
  };
};
