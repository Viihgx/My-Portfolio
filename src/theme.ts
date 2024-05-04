import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#11001B',
      dark: '#c34ad9',
    },
    secondary: {
      main: '#8758FF',
    },
  },
  typography: {
    fontFamily: "Segoe UI",
  }
});

theme = responsiveFontSizes(theme);

export default theme;