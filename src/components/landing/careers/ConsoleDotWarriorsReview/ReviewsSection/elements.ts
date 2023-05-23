import { useIsMobileView } from "@/components/landing/utils/utils";
import { Box, Typography, styled } from "@mui/material";

export const ReviewContainer = styled(Box)(()=>{
    const isMobileView= useIsMobileView();
    return{
  width:"auto",
  overflow:"hidden",
  position: "relative",
    }
});

export const ReviewContent = styled(Box)({
  padding: "100px",
  backgroundColor: "rgb(23 , 96 , 128, 0.5 )",
  borderRadius: "0 100px 0 100px",
  minHeight:"208px",
  width:"auto"
});

export const ReviewContentFlex = styled(Box)(() => {
   const isMobileView= useIsMobileView();
  return {
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:isMobileView? "column":"row",
    columnGap: "30px",
    flexWrap:'wrap'
    
  };
});

export const ParaSection = styled(Box)({
  padding: "32px",
});

export const ReviewPara = styled(Typography)({});

export const ImageSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
});

export const NameLabel = styled("label")({
  textAlign: "center",
  color: "rgb(23 , 96 , 128)",
  fontWeight: "bold",
  fontSize:'24px'
});

export const ReviewSlidesButton = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "30px",
});

export const ReviewButton = styled(Box)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});
