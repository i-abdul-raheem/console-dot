import { Background } from './../../home/DigitalTransformation/elements';
import { Box, Button, Typography, styled } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";
import { transform } from "typescript";
import { Image4 } from "@/assets";
export const SectionButton = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
});

export const StyledButton = styled(Button)({
  padding: "15px",
  border: "1px solid rgb(23 , 96 , 128 )",
  color: "rgb(23 , 96 , 128 )",
});
export const TitleAndDescripContiner = styled(Box)({
  marginBottom: "50px",
});

export const TitleSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  fontSize: "25px",
  fontWeight: "bold",
  textAlign: "center",
  paddingBottom: "16px",
});

export const DescriptionSection = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    justifyContent: "center",
    padding: isMobileView ? "0 20px" : "0 100px",
    lineHeight: "40px",
  };
});

export const StyledText = styled(Typography)({
  fontSize: "21px",
  lineHeight: "30px",
  textAlign: "center",
});

export const FlexContiner = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    marginBottom: "20px",
    display: "grid",
    gridTemplateColumns: isMobileView ? "1fr" : "1fr 1fr 1fr",
    gap: 20,
  };
});

export const Singlecard = styled(Box)({
  backgroundColor: "whitesmoke",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
});

export const CardSection = styled(Box)({
  marginBottom: "20px",
});
