import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F172A",
    },
    secondary: {
      main: "#2563EB",
    },
  },

  typography: {
    fontFamily: "Pretendard",
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
