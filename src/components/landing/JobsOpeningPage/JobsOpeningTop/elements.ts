import { styled, Box, Button, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const JobsTopContainer = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {

    backgroundColor: "#87c0cd",
  };
});

export const LeftFlex = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: 32,
});

export const JobsTopHeading = styled(Typography)({
  textAlign:"center",
  fontSize: "50px",
  
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

export const JobsTopPara = styled(Typography)({
  fontSize: "20px",
  textAlign:"center",
});

export const RightFlex = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 32,
});
