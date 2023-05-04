import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";




export const SectionContainer=styled(Box)({
    display:'flex',
    alignItems:'center',
    justifyContent:"center",
    padding:"70px"

})

export const SectionContent=styled(Box)({
 display:'flex',
 flexDirection:"column"
})

export const TitleSection = styled(Box)({
    display: "flex",
    justifyContent: "center",
    fontSize: "40px",
    fontWeight: "bold",
  });
  export const DescriptionSection = styled(Box)(()=>{
      const isMobileView=useIsMobileView();
      return{
      display: "flex",
      justifyContent: "center",
      padding: isMobileView? "0 20px" : "0 100px",
      lineHeight: "30px",}
    });
  