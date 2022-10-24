import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./theme";
import Head from "next/head";
import { useTranslation } from "next-i18next";

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<CustomThemeProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    document.body.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>My Storage</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
