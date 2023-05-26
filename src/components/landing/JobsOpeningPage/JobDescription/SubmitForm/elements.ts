import { useIsMobileView } from "@/components/landing/utils/utils";
import { Box, styled,Typography, Button } from "@mui/material";





export const FormContainer=styled(Box)(()=>{
const isMobileView=useIsMobileView();
    return{
        
    padding:isMobileView? '0' : '70px',
    display:"flex",
    flexDirection:"column",
    justifyContent:isMobileView? "center":"flex-start"

}

    
})

export const FormHeading=styled(Typography)({
    color: "rgb(23,96,128)",
    fontSize:"25px",
    fontWeight:"bold", marginBottom:"20px",
    display:"flex",
    justifyContent:"center",
    wordWrap: "break-word",
    overflowWrap: "break-word",
})

export const InputSection=styled(Box)({
    display:"flex",
    flexDirection:"column",
    padding:"10px 0"
})

export const StyledLabel=styled('label')({

    fontSize:"16px",
    paddingBottom:"10px",
    wordWrap: "break-word",
    overflowWrap: "break-word",
})

export const StyledInput=styled('input')({

    padding:"8px",
    fontSize:"16px",
    border:'1px solid #ddd'
})

export const StyledButton = styled(Button)({
    padding: "15px 0",
    border: "1px solid rgb(23 , 96 , 128 )",
    backgroundColor: "rgb(23 , 96 , 128 )",
    color: "#fff",
    fontSize:"15px",
    width:"150px",
    height:"50px",
    "&:hover": {
      backgroundColor: "rgb(23 , 96 , 128 ,0.7)",
      color: "white",
    },
  });