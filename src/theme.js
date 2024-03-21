import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6c35de",
    },
    secondary: {
      main: "#373737",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
