import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#373737",
      contrastText: "#FFF"
    },
    secondary: {
      main: "#EB0A1E",
      contrastText: "#FFF"
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'normal',
    ].join(','),
  }
});


export default theme;