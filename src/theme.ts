import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#11001B', //roxo escuro
      dark: '#250835', //roxo escuro
      light: '#8758FF' //roxo claro
    },
    secondary: {
      main: '#FD43E6', //rosa 
    },
  },
  typography: {
    fontFamily: "Segoe UI",
  }
});

theme = responsiveFontSizes(theme);

export default theme;