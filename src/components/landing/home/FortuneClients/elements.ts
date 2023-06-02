import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { useIsMobileView, useDeskView } from "../../utils/utils";

export const FortuneContainer = styled(Box)({
  backgroundColor: "#3b3b3b",
  display: "flex",
  flexDirection: "column",
  // padding: "32px",
  width: "100%",
});

export const Heading = styled(Typography)({
  fontWeight: "bold",
  fontSize: "25px",
  color: "black",
  textAlign: "center",
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

export const DescriptionSection = styled(Typography)({
  fontSize: "20px",
  padding: "20px",
  textAlign: "center",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  color:'white'
});

export const FortuneButton = styled(Button)({
  display:'flex',
  alignItems:'start',
  justifyContent:'start',
  marginBottom: "30px",
  color: "white",
  "&:hover": {
    color: "black",
  },
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

export const ClientListSection = styled(Button)(() => {
  // const isMobileView = useIsMobileView();
  const isDeskView = useDeskView();

  return {
    display: "flex",
    flexDirection: isDeskView ? "column" : "row",
    maxWidth: "100%",
    backgroundColor:'#1b1b1b'
  };
});

export const ClientListDivs = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  const isDeskView = useDeskView();

  return {
    width: "100%",
    borderRight: isMobileView ? "none" : "1px solid #696969",
    borderBottom: isMobileView ? "1px solid #696969" : "none",
    height: "350px",
    display: "flex",
    justifyContent: "center",
  };
});
