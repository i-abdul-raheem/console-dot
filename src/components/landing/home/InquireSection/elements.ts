import { styled, Button, Box } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";

export const StyledButton = styled(Button)({
  color: "orange",
  border: "1px solid orange",
  "&:hover": {
    backgroundColor: "orange",
    color: "white",
  },
});

export const SectionContainer = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return {
  display: "flex",
  flexDirection:isMobileView? 'column':'row',
  backgroundColor: "whitesmoke",
  padding:"20px",
  width:"auto"}
});

export const SectionTitle = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  display: isMobileView? "flex": "block",
  width:isMobileView? "100%" : "25%",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",}
});

export const FormSection=styled(Box)({
    width: "100%" 
})

export const InputsFirstRow=styled(Box)({
    display: "flex", width: "100%", columnGap: "30px" ,marginBottom:'20px'
})

export const InputsSecondRow=styled(Box)({
    marginBottom:'20px'
})

export const ButtonSection=styled(Box)({
    marginBottom:'20px'
})