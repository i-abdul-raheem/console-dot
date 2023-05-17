import { styled, Box, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const AboutUsContainer = styled(Box)({
  
  width: "auto",
  marginBottom: "10px",
});

export const SectionTitleDescrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const SectionTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "25px",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
});

export const SectionDescrip = styled(Typography)({
  fontSize: "20px",
  color: "#696969",
  display:"flex",
  justifyContent:"center",
  textAlign:"center"
});

export const AgileContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  columnGap: "30px",
});

export const DetailRow = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  display: "flex",
  flexDirection:isMobileView? 'column':'row',
  justifyContent: "center",
  columnGap: "30px",
  }
});

export const DetailRowBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const BoxText = styled(Typography)({
  fontSize: "15px",
});
export const BoxLabel = styled("label")({});

export const PicSectionContainer = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexDirection: isMobileView ? "column" : "row",
    columnGap: "10px",
    width: "100%",
  };
});

export const PicSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "auto",
});

export const PicContainerContentSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "auto",
  textAlign:'center'
});
