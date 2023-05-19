import { Box, styled, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const ContentContainer = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    width: "100%",
    columnGap: "10px",
    flexDirection: isMobileView ? "column" : "row",
  };
});

export const TopContent = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    padding:'30px 0',
  };
});

export const TitleSection = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize:"20px"
});
