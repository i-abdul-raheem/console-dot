import { styled, Box, Typography } from "@mui/material";
import { TransformImage } from "@/assets";
import { useId } from "react";
import { useIsMobileView } from "../../utils/utils";
export const DigiContainer = styled(Box)({
  
  width: "auto",
  marginBottom: "10px",
  paddingBottom:"64px"
});

export const SectionTitleDescrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding:"30px 0"
});

export const SectionTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "25px",
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

export const SectionDescrip = styled(Typography)({
  fontSize: "20px",
  color: "#696969",
  textAlign:"center"
});

export const Container = styled(Box)({width:'100%'});

export const BoxesContainer = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  display: "flex",
  flexDirection:isMobileView? "column":"row",
  marginBottom: "10px",
  padding: "10px",
  columnGap:"10px",
  backgroundImage: `url(${TransformImage.src})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  height:"400px",
  "&:before": {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "400px",
    backgroundColor: "rgba(0,0,0,0.6)",
    content: '""',
    zIndex: 10,
  },
  
 }
});

export const SquareBox = styled(Box)({
  backgroundSize: "cover",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
  
  
});
