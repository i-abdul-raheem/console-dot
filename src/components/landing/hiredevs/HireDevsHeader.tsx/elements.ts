import { styled, Box, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";
import Image from "next/image";
export const NameHeading = styled(Box)({
  padding: "2px",
  fontWeight: 600,
  fontFamily: "sans-serif",
  fontSize: "2.4rem",
  color: "#ddd",
});

export const HireHeader = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems:"center"
  };
});

export const GoBackBtn = styled("button")({
  backgroundColor: "rgb(23 , 96 , 128 )",
  border: "none",
  color: "#fff",
  height: "40px",
  borderRadius: "4px",
  width:"20vw"
});

export const HeaderText = styled(Typography)({
  padding: "2px",
  fontWeight: 600,
  fontFamily: "sans-serif",
  fontSize: "2em",
  color: "#ddd",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  "@media screen and (max-width: 320px)": {
    fontSize:'1em'
  }


});

export const LogoImage = styled(Image)(() => {
  const isMobileView = useIsMobileView();
  return {
    width: isMobileView ? "40px" : "50px",
    height: isMobileView ? "40px" : "50px",
    "@media screen and (max-width: 320px)": {
    width:"30px",
    height:"30px"
  }
  };
});
