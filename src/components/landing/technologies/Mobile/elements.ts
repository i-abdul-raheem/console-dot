import { Box, styled, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";



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

  export const CardBox = styled(Box)(()=>{
    const isMobileView=useIsMobileView();
    return{
  display: "grid",
  gridTemplateColumns:isMobileView? '1fr' : "1fr 1fr 1fr 1fr 1fr ",
  gap: "20px",
    }
});
