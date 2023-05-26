import { Chess, Chess2 } from "@/assets";
import { Box, styled } from "@mui/material";

export const CaseStudyContainer = styled(Box)({
 
  backgroundImage: `url(${Chess2.src})`,
  height: "300px",
  backgroundSize:'cover',
  display:"flex",
  flexDirection:"column", 
  justifyContent:'center',
  alignItems:"center",
  zIndex:10,
  

});

