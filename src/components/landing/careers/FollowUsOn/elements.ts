import { Box, styled } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const SectionContainer = styled(Box)({
  marginBottom: "50px",
});

export const SectionContent = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexDirection: isMobileView ? "column" : "row",
    justifyContent: "space-around",
    alignItems: "center",
  };
});

export const TextSection = styled(Box)({
  fontSize: "25px",
});

export const SingleIconBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: 75,
});

export const SocialMediaLabel = styled("label")({});
