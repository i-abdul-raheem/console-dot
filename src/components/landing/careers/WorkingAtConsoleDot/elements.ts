import { Box, Button, Typography, styled } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const ComponentContainer = styled(Box)({
  display: "flex",
  padding: "70px",
  columnGap: "20px",
  flexDirection: "column",
});

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
  fontSize: "40px",
  fontWeight: "bold",
});

export const DescriptionSection = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  display: "flex",
  justifyContent: "center",
  padding: isMobileView? "0 20px" : "0 100px",
  lineHeight: "40px",}
});

export const StyledText = styled(Typography)({
  fontSize: "21px",
  lineHeight: "30px",
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
  width: "100%",
  backgroundColor: "whitesmoke",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const CardSection = styled(Box)({
  marginBottom: "20px",
});
