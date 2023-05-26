import { Typography, styled, Box } from "@mui/material";
import Image from "next/image";
import { useIsMobileView } from "../../utils/utils";

export const CallSupportContainer=styled(Box)(()=>{
    const isMobileView=useIsMobileView();
    return{
    display:"flex",
    flexDirection:isMobileView? 'column' : 'row',
    }
})


export const SectionHeading=styled(Typography)({
    alignItems:"center",
    fontSize:"20px",
    fontWeight:"bold",
    
  wordWrap: "break-word",
  overflowWrap: "break-word",
})

export const SectionSubHeading=styled(Typography)({
    alignItems:"center",
    fontSize:"20px",
    fontWeight:"bold",
    
  wordWrap: "break-word",
  overflowWrap: "break-word",
})

export const IconLine=styled(Box)({
  display:'flex',
  columnGap:"5px",
  alignItems:"center"
})

export const StyledText=styled(Typography)({
    fontSize:'15px',
    textAlign:"center",
  wordWrap: "break-word",
  overflowWrap: "break-word",
})


export const CallSupportSection=styled(Box)({
width:"100%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
})

export const StyledImage=styled(Image)({
    width:"20px",
    height:"20px"
})

export const ContactNum=styled(Typography)({
    fontSize:'20px'
})

export const ContactLine=styled(Box)({
    display:"flex", columnGap:"10px",
    alignItems:"center",
    padding:"10px 0"
})