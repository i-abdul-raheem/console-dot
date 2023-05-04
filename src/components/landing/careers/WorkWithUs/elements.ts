import { Box, styled } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const ComponentContainer = styled(Box)({
  width: "auto",

  padding: "70px",
});
export const TitleSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  fontSize: "40px",
  fontWeight: "bold",
  marginBottom:'20px'
});

export const DescriptionSection = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    justifyContent: "center",
    padding: isMobileView ? "0 20px" : "0 100px",
    lineHeight: "30px",
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
