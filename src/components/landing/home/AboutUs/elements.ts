import { styled, Box, Typography } from "@mui/material";
import { useDeskView, useIsMobileView } from "../../utils/utils";

export const AboutUsContainer = styled(Box)({
  width: "100%",
  height: "100%",
});

export const SectionTitleDescrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "32px",
  justifyContent: "center",
});

export const SectionTitle = styled(Typography)({
  alignItems: "center",
  justifyContent: "center",

  wordWrap: "break-word",
  overflowWrap: "break-word",
});

export const SectionDescrip = styled(Typography)({
  fontSize: "20px",
  color: "#696969",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  paddingLeft: "5px",
});

export const AgileContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  columnGap: "30px",
});

export const DetailRow = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: "30px",
    paddingBottom: "32px",
  };
});

export const DetailRowBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "15rem",
});

export const BoxText = styled(Typography)({
  fontSize: "15px",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  textAlign: "center",
});
export const BoxLabel = styled("label")({
  fontSize: "20px",
  fontWeight: "bold",
});

export const PicSectionContainer = styled(Box)({});

export const PicSection = styled(Box)({
  width: "100%",
});

export const PicContainerContentSection = styled(Box)(() => {
  const isDeskView = useDeskView();

  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    textAlign: "left",
    width: "100%",
    padding: isDeskView ? "5px" : "10px",
  };
});
