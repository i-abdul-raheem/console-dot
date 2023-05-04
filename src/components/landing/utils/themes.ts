import { orange } from "@mui/material/colors";

interface Types {
  mode: string;
}

const BLACK = {
  default: "#222",
  secondary: "#696969",
};
const BLUE = {
  default: "rgb(23 , 96 , 128 )",
  secondary: "rgb(23 , 96 , 200 )",
};

const WHITE = {
  default: "#FFFFFF",
  secodary: "#f9f9f9",
};
const lightModePalette = {
  mode: "light",
  border: "21.0625rem solid rgba(105,105,105,.21)",

  background: {
    default: WHITE.secodary,
  },
  typography: {
    button1: {
      background: "none",
      border: "none",
      fontFamily: "Neue Haas, sans-serif",
      fontWeight: 500,
      fontSize: "20px",
      letterSpacing: "-0.01em",
    },
  },
};

const darkModePalette = {
  mode: "dark",
};

const blackModePalette = {
  mode: "black",

  background: {
    default: BLACK.default,
  },
};

const getColorPalette = (mode: string) => {
  if (mode === "light") {
    return lightModePalette;
  } else if (mode === "dark") {
    return darkModePalette;
  }
};

export const getTheme = (mode: string) => ({
  palette: getColorPalette(mode),
  typography: {
    button1: {
      color: BLUE.default,
      fontFamily: "Neue Haas, sans-serif",
      fontWeight: 500,
      fontSize: "20px",
      letterSpacing: "-0.01em",
      secondary: BLUE.secondary,
    },
  },
});

