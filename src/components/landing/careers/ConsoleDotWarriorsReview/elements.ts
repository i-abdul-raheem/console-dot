import { Box, styled } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const TitleSectionTop = styled(Box)({
  display: "flex",
  justifyContent: "center",
  fontSize: "25px",
  fontWeight:'normal',
  color:"rgb(23 , 96 , 128 )",
  marginBottom:'10px',
  textAlign:"center",
  padding:"32px",
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

export const TitleSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  fontSize: "25px",
  fontWeight: "bold",
  marginBottom:'20px',
  padding:'32px',
  wordWrap: "break-word",
  overflowWrap: "break-word",
});
export const DescriptionSection = styled(Box)(()=>{
    const isMobileView=useIsMobileView();
    return{
    display: "flex",
    justifyContent: "center",
    marginBottom:'10px',
    textAlign:"center",
    wordWrap: "break-word",
  overflowWrap: "break-word",
    padding: isMobileView? "0 20px" : "0 100px",
    lineHeight: "30px",}
  });
