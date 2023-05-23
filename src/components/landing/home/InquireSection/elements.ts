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

export const SectionContainer = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    flexDirection: isMobileView ? "column" : "row",
    backgroundColor: "white",
    width: "100%",
  
  };
});

export const SectionTitle = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    padding:"32px"
  };
});

export const FormSection = styled(Box)({
  padding:"32px"
});

export const InputsFirstRow = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  display: "flex",
  flexDirection:isMobileView? 'column' : 'column',
  
  columnGap: "30px",
  marginBottom: "20px",
  }
});

export const InputsSecondRow = styled(Box)({
  marginBottom: "20px",
});

export const ButtonSection = styled(Box)({
  marginBottom: "20px",
});
