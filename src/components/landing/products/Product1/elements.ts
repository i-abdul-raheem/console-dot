import { Box, Typography, styled } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";



export const TextHeading=styled(Typography)({
    fontsize:"25px",
    fontWeight:'bold',
    wordWrap:"break-word",
    overflowWrap:"break-word"

})

export const TextDescrip=styled(Typography)({
    fontsize:"20px",
    wordWrap:"break-word",
    overflowWrap:"break-word"

})

export const LiWithIcon=styled(Box)({
    display:"flex",
    paddingLeft:"32px"
})

export const Product1Container=styled(Box)(()=>{
    const isMobileView=useIsMobileView();
    return{
        paddingTop:'64px',
        maxWidth:"100%",
    display:"flex",
    columnGap:"20px",
    rowGap:"20px",
    paddingBottom:"64px",
    flexDirection:isMobileView? 'column-reverse':"row"
    }
})