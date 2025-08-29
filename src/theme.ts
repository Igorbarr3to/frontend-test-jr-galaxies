import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const spaceDark = "#09090b";
const galaxyPurple = "#7B3FBC";
const starYellow = "#FFD700";
const nebulaGray = "#B0BEC5";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: galaxyPurple,
      light: "#A066DD",
      dark: "#5C2D90",
    },
    secondary: {
      main: starYellow,
      light: "#FFEB3B",
      dark: "#C7A300",
    },
    background: {
      default: spaceDark,
      paper: spaceDark,
    },
    text: {
      primary: "#E0E0E0",
      secondary: nebulaGray,
    },
  },
  typography: {
    fontFamily: "inter, sans-serif",
    h3: {
      fontWeight: 700,
      color: "#FFFFFF",
      letterSpacing: "0.05em",
    },
    h4: {
      fontWeight: 600,
      color: "#FFFFFF",
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: galaxyPurple,
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#A066DD",
            },
            "& .MuiListItemIcon-root": {
              color: "#FFFFFF",
            },
            "& .MuiListItemText-secondary": {
              color: "#E0E0E0",
            },
          },
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
