import { styled, Box, Typography } from "@mui/material";
import Link from "next/link";
import { useIsMobileView } from "../../utils/utils";



export const RightContainer=()=>{
  width: "100%" 
}
export const RightBox = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return {
  display: isMobileView? "none": "flex",
  flexDirection: isMobileView? "row" : "column",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "67px",
  height: "calc(100vh - 64px)",
  position: isMobileView? "fixed" :"relative",
  borderLeft: "1px solid #696969",
  borderBottom:"1px solid #696969",
  }
});

export const IconsList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const ListItems = styled(Box)({
  marginBottom: 24,
});

export const Heading = styled(Box)({
  fontSize: "20px",
  borderTop: " 1px solid double #696969",
  borderBottom: "1px solid double #696969",
  borderStyle: "double",
  borderLeft: "none",
  borderRight: "none",
  marginBottom: "42px",
  padding: "12px 0px",
  fontWeight: "bold",
});

export const SubHeading = styled(Typography)({
  fontSize: "35px",
  width: "100%",
  display: "block",
  overflow: "hidden",
});

export const DynamicText = styled(Box)({
  display: "flex",
  fontSize: "35px",
  fontWeight: "bold",
  color: "rgb(23 , 96 , 128 )",
});
export const StaticText = styled(Typography)({});

export const DescripHeading = styled(Box)({
  justifyContent: "center",
  display: "flex",
});

export const DescripItems = styled(Typography)({
  margin: "50px 0px",
  padding: "10px",
  borderRight: "1px solid #696969",
  "&:last-child": {
    border: "none",
  },
});

export const BottomPanel = styled(Box)({
  borderTop: "1px solid #696969",
  borderBottom:"1px solid #696969",
  margin: "0px",
  padding: 0,
  display: "flex",
  alignItems: "center",
  height: 72,
});

export const BottomLink = styled(Link)({
  color: "#000",
  textDecoration: "none",
  height: 72,
  display: "flex",
  alignItems: "center",
  padding: "0 24px",
});

export const ArrowBtn = styled(Link)({
  color: "#000",
  backgroundColor: "whitesmoke",
  height: 72,
  display: "flex",
  alignItems: "center",
  padding: "0 24px",
});
