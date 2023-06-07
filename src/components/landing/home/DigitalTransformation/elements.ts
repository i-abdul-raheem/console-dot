import { transform } from "typescript";
import { BoxesContainer } from "./elements";
import { styled, Box, Typography } from "@mui/material";
import { DigitalTransmission } from "@/assets";
import { useId } from "react";
import { useIsMobileView } from "../../utils/utils";
export const DigiContainer = styled(Box)({
  width: "auto",
  marginBottom: "10px",
  paddingBottom: "64px",
});

export const SectionTitleDescrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "30px 0",
});

export const SquareBox = styled(Box)({
  backgroundSize: "cover",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
});

export const Background = styled(Box)({
  position: "relative",
  display: "flex",
  marginBottom: "10px",
  objectFit: "contain",
  backgroundImage: `url(${DigitalTransmission.src})`,
  backgroundSize: "cover",
  height: "500px",
  backgroundPosition: "center",
});
export const SingleBox = styled(Box)(() => {
  return {
    flex: 1,
    left: 0,
    width: "100%",
    height: "500px",
    position: "relative",
    alignItems: "flex-end",
    borderRight: "1px dotted white",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "1rem 2rem",
    boxSizing: "border-box",
    zIndex: 99,
    "&:before": {
      position: "absolute",
      content: '""',
      backgroundColor: "transparent",

      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
    "&:hover:before": {
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    "&:hover": {
      opacity: ".9",
      paddingBottom: "2rem",
    },
  };
});
