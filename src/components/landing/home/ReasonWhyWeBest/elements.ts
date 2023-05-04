import { Box, Typography, styled } from "@mui/material"




export const ReasonWhyWeContainer=styled(Box)({
    padding:'40px 10px',
    
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
    fontSize:'30px',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'10px'
})

export const SectionDescrip=styled(Typography)({
    fontSize:'25px',
    color:'#696969'
})