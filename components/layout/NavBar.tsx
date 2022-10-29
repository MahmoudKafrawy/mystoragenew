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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import NavBarButton from "../fragments/NavBarButton";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "./NavBar.module.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { navBarRoutes } from "../../common/routes";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
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
        {navBarRoutes.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={t(item.translationKey)} />
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
              sx={{ display: { md: "none" }, margin: "0 5px" }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                cursor: "pointer",
                fontWeight: "700",
                margin: "0 15px",
                flexGrow: 1,
                display: { xs: "block", sm: "block", color: "#ff9a28" },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <Image src="/images/logo.png" width="27" height="27" alt="" />
                <Link href="/">
                  <Typography
                    sx={{ fontFamily: "Ubuntu", fontWeight: 600, fontSize: "min(3vw,16px)", margin: "0 5px" }}
                  >
                    MY STORAGE
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, marginRight: 3 }}>
              {navBarRoutes.map((item) => (
                <Link href={item.href} key={item.label}>
                  <a>
                    <NavBarButton title={t(`${item.translationKey}`)}></NavBarButton>
                  </a>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/login">
                <AccountBoxIcon
                  classes={{ root: styles.icon }}
                  sx={{
                    color: "#393939",
                    margin: "0 10px",
                    fontSize: "30px",
                    display: { sm: "none" },
                    cursor: "pointer",
                  }}
                />
              </Link>
              {["routes.login", "routes.calculate"].map((item, index) => (
                <Link href="/login" key={index}>
                  <a>
                    <NavBarButton key={item} title={t(`${item}`)}></NavBarButton>
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
