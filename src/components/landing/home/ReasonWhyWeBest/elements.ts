import { Box, Typography, styled } from "@mui/material"
import { useIsMobileView } from "../../utils/utils"




export const ReasonWhyWeContainer=styled(Box)({
    padding:'70px',
    
    width:'auto',
    marginBottom:'10px'
})


export const SectionTitleDescrip=styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:"center",
    marginBottom:"20px"
    
})

export const SectionTitle=styled(Typography)({
    fontWeight:'bold',
    fontSize:'25px',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'10px'
})

export const SectionDescrip=styled(Typography)({
    fontSize:'20px',
    color:'#696969'
})

export const FlexBox=styled(Box)(()=>{
    const isMobileView= useIsMobileView();
    return{
    display: "flex", padding:'20px',
    flexDirection:isMobileView? "column":'row',
    width:"100%"
    }
})