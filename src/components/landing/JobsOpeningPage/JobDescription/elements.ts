import { Box, styled} from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const MainContainer=styled(Box)(()=>{
    const isMobileView=useIsMobileView();
    return{
    display:"flex",
    flexDirection:isMobileView? 'column' : 'row',
    justifyContent:'center',
    padding:isMobileView? "32px 10px" :"70px 32px"
    }
    

})