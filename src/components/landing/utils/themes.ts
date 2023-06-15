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
  xl: "2.6rem 2.3rem",
  lg: "2.3rem 2rem",
  md: "2rem, 1.8rem",
  sm: "1.5rem 1.3rem",
  xs: "1rem .9rem",
};

export const SubFont = {
  xl: "2rem",
  lg: "1.8rem",
  md: "14px",
  sm: "11px",
  xs: "10px",
};

export const HeadFont = {
  xl: "3rem",
  lg: "2.2rem",
  md: "1.5rem",
  sm: "1rem",
  xs: "1rem",
};

export const Para = {
  xl: "24px",
  lg: "20px",
  md: "18px",
  sm: "16px",
  xs: "14px",
};

export const Margin = {
  xl: "2.6rem 2.3rem",
  lg: "2.3rem 2rem",
  md: "2rem, 1.8rem",
  sm: "1.5rem 1.3rem",
  xs: "1rem .9rem",
};

export const Primary = "#226597";
export const Secondary = "#87c0cd";

export const Dark = "#113f67";

export const Body = "#f3f9fb";

export const ButtonPadding = {
  xl: "16px 20px",
  lg: "14px 18px",
  md: "12px 16px ",
  sm: "10px  14px",
  xs: "8px 12px",
};

export const H1 = styled(Typography)({
  fontSize: "30px",
  lineHeight: "40px",
});

export const H2 = styled(Typography)({
  fontSize: "18px",
  lineHeight: "25px",
});

export const H3 = styled(Typography)({
  fontSize: "16px",
  lineHeight: "22px",
});
export const ContainerPadding = "1.6rem 1.2rem";
