import {styled, Button} from "@mui/material";

export const StyledButton =styled(Button)({
    color:'orange', border:'1px solid orange' ,
    '&:hover':{
        
            backgroundColor:"orange",
            color:'white'
        
    }

})