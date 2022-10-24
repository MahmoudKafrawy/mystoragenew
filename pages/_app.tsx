import "../styles/globals.scss";
import App from "next/app";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import AllProviders from "../components/wrappers/AllProviders";
import { Container } from "@mui/material";
import { AuthProvider, getUser } from "../contexts/AuthContext";

function MyApp({ Component, pageProps, auth }: AppProps | any) {
  return (
    <AuthProvider myAuth={auth}>
      <AllProviders>
        <Component {...pageProps} />
      </AllProviders>
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  const auth = await getUser(appContext.ctx);
  return { ...appProps, auth: auth };
};

export default appWithTranslation(MyApp);
