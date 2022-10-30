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
  const accountPages = [
    {
      title: "personal",
      icon: <AccountBox style={{ verticalAlign: "middle" }} />,
      translationKey: "personal.personalAccount",
    },
    { title: "addresses", icon: <Home style={{ verticalAlign: "middle" }} />, translationKey: "addresses.address" },
    { title: "cartons", icon: <Inventory style={{ verticalAlign: "middle" }} />, translationKey: "cartons.carton" },
    {
      title: "deliveries",
      icon: <LocalShipping style={{ verticalAlign: "middle" }} />,
      translationKey: "deliveries.deliveries",
    },
    {
      title: "transactions",
      icon: <Paid style={{ verticalAlign: "middle" }} />,
      translationKey: "transactions.transactions",
    },
    {
      title: "wallet",
      icon: <AttachMoney style={{ verticalAlign: "middle" }} />,
      translationKey: "transactions.paymentMethods.Wallet",
    },
  ];
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
          {accountPages.map((page, index) => (
            <Link key={page.title} href={`/account/${page.title}`} shallow>
              <a>
                <Tab
                  label={
                    <div>
                      {page.icon} {t(`${page.translationKey}`)}
                    </div>
                  }
                  {...a11yProps(index)}
                />
              </a>
            </Link>
          ))}
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
        <TabPanel value={value} index={value}>
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
