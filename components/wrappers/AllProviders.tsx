import Footer from "../layout/Footer";
import ThemeProviderWrapper from "../theme/ThemeProviderWrapper";
import { QueryClient, QueryClientProvider } from "react-query";
import { FormContextProvider } from "../../contexts/FormContext";
import { ModalProvider } from "../../contexts/ModalContext";
import { Box } from "@mui/material";
import NavBar from "../layout/NavBar";
import { StyledEngineProvider } from "@mui/material/styles";

interface AllProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const AllProviders: React.FC<AllProvidersProps> = ({ children }) => {
  return (
    <ModalProvider>
      <FormContextProvider>
        <QueryClientProvider client={queryClient}>
          {/* <StyledEngineProvider injectFirst> */}
          <ThemeProviderWrapper>
            <NavBar />
            <Box>{children}</Box>
            <Footer />
          </ThemeProviderWrapper>
          {/* </StyledEngineProvider> */}
        </QueryClientProvider>
      </FormContextProvider>
    </ModalProvider>
  );
};
export default AllProviders;
