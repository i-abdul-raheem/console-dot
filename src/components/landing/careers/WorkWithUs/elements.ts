import { Box, styled } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const ComponentContainer = styled(Box)({
  width: "auto",
  paddingBottom:"32px"
});
export const TitleSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  fontSize: "25px",
  fontWeight: "bold",
  marginBottom:'20px',
  wordWrap: "break-word",
  overflowWrap: "break-word",
  textAlign:"center"
});

export const DescriptionSection = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    justifyContent: "center",
    padding: "32px",
    lineHeight: "30px",
    wordWrap: "break-word",
  overflowWrap: "break-word",
  textAlign:"center"
  };
});

export const FlexContainer = styled(Box)({
  display: "flex",
  columnGap: "20px",
  backgroundColor: "whitesmoke",
});

export const FlexCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  rowGap: 20,
  width: "100%",
});
