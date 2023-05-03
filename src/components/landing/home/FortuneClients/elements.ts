import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";


export const FortuneContainer=styled(Box)({
    backgroundColor: "whitesmoke",
          display: "flex",
          flexDirection: "column",
          padding: "100px",
})

export const Heading=styled(Typography)({
    fontWeight:"bold",
    fontSize:"25px",
    color:"black"
})

export const DescriptionSection=styled(Typography)({
    fontSize: "20px", marginBottom: "20px" ,
    
})

export const FortuneButton=styled(Button)({
    
    marginBottom:"30px",
    backgroundColor:'rgb(23 , 96 , 128 )',
    color:'white',
    '&:hover': {
        color:'black'
    }
})

export const ClientListSection=styled(Button)({
    display: "flex", maxWidth: "100%", padding: "50px"
})

export const ClientListDivs=styled(Box)({
    width: "100%",
            borderRight: "1px solid #696969",
            height: "350px",
            display: "flex",
            justifyContent: "center",
})