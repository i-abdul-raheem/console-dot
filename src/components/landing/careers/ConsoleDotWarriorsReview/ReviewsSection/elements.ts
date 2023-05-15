import { Box, Typography, styled } from "@mui/material";


export const ReviewContainer=styled(Box)({
    padding:'70px' ,
    position:"relative"
})

export const ReviewContent=styled(Box)({
    padding:"100px" , backgroundColor:"rgb(23 , 96 , 128, 0.5 )", borderRadius:'0 100px 0 100px'
})

export const ReviewContentFlex=styled(Box)({
    display:"flex" , columnGap:'30px'
})

export const ParaSection=styled(Box)({
    padding:"30px"
})

export const ReviewPara=styled(Typography)({

})

export const ImageSection=styled(Box)({
    display:'flex',
    flexDirection:"column",
    rowGap:"20px"
})

export const NameLabel=styled('label')({

})

export const ReviewSlidesButton=styled(Box)({
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    padding:"30px",
})

export const ReviewButton=styled(Box)({
    display:"flex",
    alignItems:"center",
    cursor:"pointer",
    
})