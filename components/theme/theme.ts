import { createTheme, colors, Theme } from "@mui/material";


declare module "@mui/material/styles" {
  interface DefaultTheme extends Theme {}
}

interface fontThemeInterface {
  primary: string;
  secondary: string;
  tertiary: string;
}
declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    fonts: fontThemeInterface; // optional
  }
  interface Theme {
    fonts: fontThemeInterface; // optional
  }
}

const theme = createTheme({
  typography:{
    fontFamily: [
      'Ubuntu',
      'cursive',
    ].join(','),
  },
  fonts: {
    primary: "Ubuntu, sans-serif",
    secondary: "Ubuntu, sans-serif",
    tertiary: "Ubuntu, sans-serif",
  },
  palette: {
    primary: {
      main: "#ff9a28",
    },
    secondary: {
      main: colors.orange[400],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 920,
      lg: 1280,
      xl: 1700,
    },
  },
  // shape: {
  //   borderRadius: 0,
  // },
  components: {
    // MuiOutlinedInput: {
    //   defaultProps: {
    //     sx: {
    //       height: 50,
    //     },
    //   },
    // },
    MuiTab: {
      defaultProps: {
        sx: {
          width:"100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        },
      },
    },
  },
});

export default theme;
