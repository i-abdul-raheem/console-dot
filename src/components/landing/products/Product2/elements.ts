import { Box, styled, Avatar } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const Product2Container = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    maxWidth: "100%",
    display: "flex",
    columnGap: "20px",
    rowGap: "20px",
    paddingBottom: "64px",
    flexDirection: isMobileView ? "column-reverse" : "row-reverse",
  };
});

