import { Box, styled, Avatar, Typography } from "@mui/material";
import { useIsMobileView } from "./utils";

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

export const FullPage = styled(Box)({
  position: "relative",
  width: "100%",
  backgroundColor: "red",
});

export const Wrapper = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#f3f9fb",
  };
});
export const MainFlexColumnWrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
  };
});

export const ImageContainer = styled(Avatar)(() => {
  return {
    maxWidth: "100px",
    maxHeight: "100px",
  };
});

export const Padding = {
  xl: "2rem",
  lg: "1.8rem",
  md: "1.7rem",
  sm: "1.5rem",
  xs: "0rem",
};

export const SubFont = {
  xl: "2rem",
  lg: "1.8rem",
  md: "14px",
  sm: "11px",
  xs: "10px",
};

export const HeadFont = {
  xl: "4rem",
  lg: "2.7rem",
  md: "2rem",
  sm: "1rem",
  xs: "1rem",
};

export const Primary = {
  color: "#226597",
};
export const Secondary = {
  color: "#87c0cd",
};
export const Dark = {
  color: "#113f67",
};
export const Body = {
  color: "#f3f9fb",
};
