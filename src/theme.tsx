import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5050",
    },
    secondary: {
      main: "#00878c",
    },
  },

  typography: {
    fontFamily: "'Nunito Sans', Arial",
  },
});

export default theme;
