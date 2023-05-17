import { styled, Box, Typography } from "@mui/material";
import { Image0, Image1, Image2, Image4, Image5, Image6 } from "@/assets";
import { useIsMobileView } from "../../utils/utils";

export const CccContainer = styled(Box)({
  width: "100%",
});

export const SectionTitleDescrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign:"center",
  paddingBottom:"20px"
});

export const SectionTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "25px",
  alignItems: "center",
  justifyContent: "center",
  textAlign:"center"
});

export const SectionDescrip = styled(Typography)({
  fontSize: "20px",
  color: "#696969",
});

export const CardSection = styled(Box)({});

export const ImageRow = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  display: "flex",
  marginBottom: "10px",
  flexDirection:isMobileView? "column":'row',
  }
});

export const ImageSectionContainer = styled(Box)({
  backgroundColor: "whitesmoke",
});

export const ImageLarge1 = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  width:"100%",
  height: "300px",
  backgroundColor: "white",
  backgroundImage: `url(${Image0.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "0.6s",
  position: "relative",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    content: '""',
    zIndex: 10,
  },
}});

export const ImageSmall2 = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  width:"100%",
  height: "300px",
  backgroundColor: "white",
  backgroundImage: `url(${Image1.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "0.6s",
  position: "relative",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    content: '""',
    zIndex: 10,
  },
}});

export const ImageSmall3 = styled(Box)(()=>{
  
  const isMobileView=useIsMobileView();
  return{
  width:"100%",
  
  height: "300px",
  backgroundColor: "white",
  backgroundImage: `url(${Image2.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "0.6s",
  position: "relative",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    content: '""',
    zIndex: 10,
  },
}});

export const ImageSmall4 = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  width:"100%",
  height: "300px",
  backgroundColor: "white",
  backgroundImage: `url(${Image4.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "0.6s",
  position: "relative",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    content: '""',
    zIndex: 10,
  },
}});

export const ImageSmall5 = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  width:"100%",
  height: "300px",
  backgroundColor: "white",
  backgroundImage: `url(${Image5.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "0.6s",
  position: "relative",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    content: '""',
    zIndex: 10,
  },
}});

export const ImageLarge6 = styled(Box)(()=>{
  const isMobileView= useIsMobileView();
  return{
  width:"100%",
  height: "300px",
  backgroundColor: "white",
  backgroundImage: `url(${Image6.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "0.6s",
  position: "relative",
  "&:hover": {
    transition: "0.6s",
    backgroundSize: "110%",
  },
  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    content: '""',
    zIndex: 10,
  },
}});

export const ImageSectionContent = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ImageText = styled(Typography)({
  zIndex: 15,
  color: "white",
  fontSize: "20px",
  textAlign:"center"
});


export const ColumnInMobile=styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  display:"flex",
  flexDirection:isMobileView? "column":"row",
  width:"100%",
  columnGap:"20px",
  rowGap:"20px"
  }
})

