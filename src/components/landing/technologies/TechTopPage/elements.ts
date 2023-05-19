import { Box, styled, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const TechTopSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  position:'relative'
});

export const Heading = styled(Typography)({
  padding: "20px 0 20px 32px",
  fontWeight:"bold",
  fontsize:"25px"

});

export const StyledPara = styled(Typography)({
  textAlign: "center",
  padding: "0 32px 20px 32px",
  fontSize:"20px"
});

export const CardBox = styled(Box)(()=>{
    const isMobileView=useIsMobileView();
    return{
  display: "grid",
  gridTemplateColumns:isMobileView? '1fr' : "1fr 1fr 1fr 1fr 1fr 1fr ",
  gap: "20px",
    }
});

export const SingleCard = styled(Box)({
  display: "flex",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  flexDirection: "column",
  rowGap: "15px",
  
  padding: "25px 15px",
  justifyContent: "center",
  alignItems: "center",
  '&:hover': {
    boxShadow: "0px 0px 20px 2px rgba(0, 0, 0, 0.2)",
  },
});
