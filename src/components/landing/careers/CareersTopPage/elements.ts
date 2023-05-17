import { Box, styled } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const CareerContainer = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  display: "flex",
  columnGap: "50px",
  flexDirection:isMobileView? 'column-reverse': 'row',
  width:isMobileView? "auto":'100%',
  justifyContent:"center",
  alignItems:'center'
  }
});

export const StyledButton = styled(Box)({
  backgroundColor: "rgb(23 , 96 , 128 )",
  border: "none",
  padding: "15px 100px",
  display: "flex",
  justifyContent: "center",
  color: "white",
  fontSize: "25px",
  borderRadius: "10px",
  "&:hover":{
    backgroundColor:"rgb(23 , 96 , 200 )"
  }
});

export const ImageSection = styled(Box)({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
});

export const LeftCard = styled(Box)({
  width: "100%",
});

export const LeftCardHeading = styled(Box)({
  fontSize: "25px",
  fontWeight:"bold",
  textAlign:"center"
});

export const LeftCardParagraph = styled(Box)({
  fontSize: "20px",
  padding:"32px 0 32px 62px",
  textAlign:"center"
});
