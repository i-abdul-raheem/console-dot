import { styled, Box, Typography } from "@mui/material";
import { TransformImage } from "@/assets";
export const DigiContainer = styled(Box)({
  
  width: "auto",
  marginBottom: "10px",
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
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
});

export const SectionDescrip = styled(Typography)({
  fontSize: "20px",
  color: "#696969",
  textAlign:"center"
});

export const Container = styled(Box)({width:'100%'});

export const BoxesContainer = styled(Box)({
  display: "flex",
  marginBottom: "10px",
  padding: "10px",
  backgroundImage: `url(${TransformImage.src})`,
  backgroundRepeat:"no-repeat",
  width:"100%",
  backgroundSize:"cover"
});

export const SquareBox = styled(Box)({
  width: "100%",
  height: "300px",
  margin: "10px 4px 0  0",
  backgroundColor: "transparent",
  border:'1px solid #fff'
});
