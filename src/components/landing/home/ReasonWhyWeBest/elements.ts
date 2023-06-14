import { Box, Typography, styled } from "@mui/material";
import { useIsMobileView, useDeskView } from "../../utils/utils";
import { ContainerPadding } from "../../utils";

export const ReasonWhyWeContainer = styled(Box)({
  padding: ContainerPadding,
});

export const SectionTitleDescrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
});

export const SectionTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "25px",
  textAlign: "center",
  marginBottom: "10px",
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

export const SectionDescrip = styled(Typography)({
  fontSize: "20px",
  color: "#696969",
  textAlign: "center",
});

export const FlexBox = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  const isDeskView = useDeskView();

  return {
    display: "flex",
    padding: isDeskView ? "10px" : "32px",
    flexDirection: isDeskView ? "column" : "row",
  };
});
