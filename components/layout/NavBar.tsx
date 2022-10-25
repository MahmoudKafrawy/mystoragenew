import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import NavBarButton from "../fragments/NavBarButton";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styles from "./nav.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["routes.home", "routes.ourStory", "routes.service", "routes.howItWorks", "routes.contact"];
const NavBar = (props: Props) => {
  const { t } = useTranslation("nav");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 600 }}>
        MY STORAGE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={t(item)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" className={styles.navBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Ubuntu",
                fontWeight: "700",
                flexGrow: 1,
                display: { xs: "block", sm: "block", color: "orange" },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <Image src="/images/logo.png" width="40" height="40" alt="" />
                <Link href="/">
                  <Typography sx={{ fontWeight: 600, fontSize: "min(3vw,14px)", cursor: "pointer" }}>
                    MY STORAGE
                  </Typography>
                </Link>
              </Box>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, marginRight: 3 }}>
              {navItems.map((item, index) => (
                <NavBarButton key={index} title={t(`${item}`)}></NavBarButton>
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/login">
                <AccountBoxIcon
                  sx={{ color: "#393939", margin: "0 10px", fontSize: "30px", display: { sm: "none" } }}
                />
              </Link>
              {["routes.login", "routes.calculate"].map((item, index) => (
                <Link href="/login" key={index}>
                  <a>
                    <NavBarButton title={t(`${item}`)}></NavBarButton>
                  </a>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: "block", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default NavBar;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "nav"])),
    },
  };
};
