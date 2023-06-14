import { useIsMobileView } from "@/components/landing/utils/utils";
import { Box, styled, Typography, Button } from "@mui/material";

export const JobBriefContainer = styled(Box)(()=>{
   const isMobileView=useIsMobileView();
    return{
  display: "flex",
  flexDirection: "column",

  "@media screen and (max-width: 320px)": {
        width:'100vw'
      }
    }
});

export const PageTitle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  paddingBottom: "48px",
  fontSize: "32px",
  fontWeight: "bold",
  wordWrap: "break-word",
  overflowWrap: "break-word",
});


export const ListItems = styled("li")({
  fontSize: "20px",
  
  wordWrap: "break-word",
  overflowWrap: "break-word",
});
export const StyledButton = styled(Button)({
  padding: "15px",
  border: "1px solid rgb(23 , 96 , 128 )",
  backgroundColor: "rgb(23 , 96 , 128 )",
  color: "#fff",
  fontSize: "15px",
  width: "150px",
  height: "50px",
  "&:hover": {
    backgroundColor: "rgb(23 , 96 , 128 ,0.7)",
    color: "white",
  },
});

export const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding:"20px 0"
});
