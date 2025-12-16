import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import vazireot from "./asset/fonts/Vazir.eot";
import vazirttf from "./asset/fonts/Vazir.ttf";
import vazirwoff from "./asset/fonts/Vazir.woff";
import vazirwoff2 from "./asset/fonts/Vazir.woff2";
import GlobalState from "./context/GlobalState";
import MainComponent from "./component/main/MainComponent";

const theme = createTheme({
  direction: "rtl",
  fontFamily: "vazir!important",
  typography: {
    fontFamily: "vazir!important",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
              @font-face {
                font-family: vazir;
                src: url(${vazireot}) format('eot'),url(${vazirttf}) format('ttf'),url(${vazirwoff}) format('woff'),url(${vazirwoff2}) format('woff2');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `,
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalState>
        <MainComponent />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
