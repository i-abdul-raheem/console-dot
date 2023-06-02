import { styled, Box, Typography } from "@mui/material";
import Link from "next/link";
import { useIsMobileView, useDeskView } from "../../utils/utils";

export const HeroImageContainer = styled(Box)(() => {
  return {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    zIndex: 2,
  };
});
export const RightBox = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: isMobileView ? "none" : "flex",
    flexDirection: isMobileView ? "row" : "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "67px",
    height: "calc(100vh - 64px)",
    position: isMobileView ? "fixed" : "relative",
    borderLeft: "1px solid #fff",
    borderBottom: "1px solid #696969",
  };
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

export const Heading = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    fontSize: isMobileView ? "20px" : "25px",
    borderTop: " 1px solid double #696969",
    borderBottom: "1px solid double #696969",
    borderStyle: "double",
    borderLeft: "none",
    color: "#fff",
    borderRight: "none",
    marginBottom: "42px",
    padding: "12px 0px",
    fontWeight: "bold",
  };
});

export const SubHeading = styled(Typography)(() => {
  const isMobileView = useIsMobileView();
  return {
    fontSize: isMobileView ? "20px" : "35px",
    width: "100%",
    color: "#fff",
  };
});

export const DynamicText = styled(Box)(() => {
  // const isMobileView = useIsMobileView();
  const isDeskView = useDeskView();

  return {
    display: "flex",
    flexDirection: isDeskView ? "column" : "row",
    fontSize: isDeskView ? "20px" : "35px",
    fontWeight: "bold",
    color: "rgb(23 , 96 , 128 )",
    // position: "absolute",
  };
});
export const StaticText = styled(Typography)({});

export const DescripHeading = styled(Box)({
  justifyContent: "center",
  display: "flex",
});

export const DescripItems = styled(Typography)(() => {
  const isDeskView = useDeskView();
  return {
    margin: "50px 0px",
    padding: "10px",
    color: "#fff",
    borderBottom: isDeskView ? "1px solid #696969" : "no-border",
    borderRight: isDeskView ? "none" : "1px solid #696969",
    "&:last-child": {
      borderBottom: isDeskView ? "1px solid #696969":'none',
      borderRight: isDeskView ? "1px solid #696969":'none',
    },
  };
});

export const BottomPanel = styled(Box)({
  borderTop: "1px solid #fff",
  borderBottom: "1px solid #696969",
  margin: "0px",
  padding: 0,
  display: "flex",
  alignItems: "center",
  height: 72,
});

export const BottomLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  height: 72,
  display: "flex",
  alignItems: "center",
  padding: "0 24px",
});

export const ArrowBtn = styled(Link)({
  color: "#000",
  backgroundColor: "transparent",
  height: 72,
  display: "flex",
  alignItems: "center",
  padding: "0 24px",
});
