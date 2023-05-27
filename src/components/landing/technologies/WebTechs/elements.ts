import { Box, styled, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";


export const CardBox = styled(Box)(()=>{
    const isMobileView=useIsMobileView();
    return{
  display: "grid",
  gridTemplateColumns:isMobileView? '1fr' : "1fr 1fr 1fr 1fr 1fr ",
  gap: "20px",
    }
});

export const SingleCard = styled(Box)({
  display: "flex",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  flexDirection: "column",
  rowGap: "15px",
  width:"140px",
  padding: "25px 15px",
  justifyContent: "center",
  alignItems: "center",
  '&:hover': {
    boxShadow: "0px 0px 20px 2px rgba(0, 0, 0, 0.2)",
  },
});

export const CardContainer=styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  backgroundColor: "whitesmoke",
  justifyContent:'center',
  alignItems:'center',
})

export const TechHeading=styled(Typography)({
  fontSize:"35px",
  fontWeight:"bold",
  paddingBottom:"64px",
  wordWrap:"break-word",
  overflowWrap:"break-word",
  "@media screen and (max-width:225px)":{
    fontSize:"1.5rem"
  }
})