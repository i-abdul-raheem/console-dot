import { Box, TextField, styled } from "@mui/material";




export const StyledTextInputs=styled(TextField)({
    width:"100%",
    padding:"10px 20px",
    "&:hover":{
        borderBottom:'"4px solid rgb(23 , 96 , 128 )"'
    }

})

export const StyledForm=styled(Box)({
    display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border:"1px solid #ddd",
          borderTop:"4px solid rgb(23 , 96 , 128 )",
          padding:'20px'
})