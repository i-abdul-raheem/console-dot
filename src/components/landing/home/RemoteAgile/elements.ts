import { Box, styled, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const ContentContainer = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    columnGap: "10px",
    flexDirection: isMobileView ? "column" : "row",
    padding:"32px"
  };
});

export const TopContent = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    backgroundColor:"whitesmoke",
    padding:'30px 0',
  };
});

export const TitleSection = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize:"20px",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  paddingBottom:"20px",
  padding:"32px"
});

export const FlexHeading=styled(Typography)({
fontSize:'25px' ,
fontWeight:"bold",
})