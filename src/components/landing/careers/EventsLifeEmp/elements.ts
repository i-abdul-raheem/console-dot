import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const ComponentContainer = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{display: "flex",
  flexDirection: isMobileView? 'column':'row',
  padding: "70px",
  rowGap:'20px',
  columnGap: "20px",}
});

export const Section1 = styled(Box)({
  backgroundColor: "whitesmoke",
  width: "100%",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between"
});

export const ImageSection = styled(Box)({});

export const SectionTitle = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const SectionDescription = styled(Typography)({
  padding: "20px",
  fontSize: "20px",
  height: "120px",
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

