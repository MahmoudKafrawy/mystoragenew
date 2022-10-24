import Footer from "../layout/Footer";
import ThemeProviderWrapper from "../theme/ThemeProviderWrapper";
import { QueryClient, QueryClientProvider } from "react-query";
import { FormContextProvider } from "../../contexts/FormContext";
import { ModalProvider } from "../../contexts/ModalContext";
import { Box } from "@mui/system";
import NavBar from "../layout/NavBar";

interface AllProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const AllProviders: React.FC<AllProvidersProps> = ({ children }) => {
  return (
    <ModalProvider>
      <FormContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProviderWrapper>
            <NavBar />
            <Box sx={{ marginTop: 7 }}>{children}</Box>
            <Footer />
          </ThemeProviderWrapper>
        </QueryClientProvider>
      </FormContextProvider>
    </ModalProvider>
  );
};
export default AllProviders;
