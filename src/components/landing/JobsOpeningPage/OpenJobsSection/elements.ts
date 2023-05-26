import { styled, Box, Button, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils/utils";
import Image from "next/image";

export const TopHeading = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    flexDirection: isMobileView ? "column" : "row",
    
    
  };
});

export const Singlecard = styled(Box)({
  width: "100%",
  backgroundColor: "whitesmoke",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "30px",
});

export const CardSection = styled(Box)({
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
});

export const StyledText = styled(Typography)({
  fontSize: "25px",
  lineHeight: "30px",
  textAlign:"center"
});
export const SectionButton = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px",
  columnGap: "30px",
  
});

export const StyledButton1 = styled(Button)({
  padding: "15px",
  border: "1px solid rgb(23 , 96 , 128 )",
  backgroundColor: "rgb(23 , 96 , 128)",
  color: "white",
  "&:hover": {
    backgroundColor: "rgb(23 , 96 , 200)",
  },
});

export const StyledButton = styled(Button)({
  padding: "15px",
  border: "1px solid rgb(23 , 96 , 128 )",
  backgroundColor: "whitesmoke",
  color: "black",
  "&:hover": {
    backgroundColor: "rgb(23 , 96 , 128)",
    color: "white",
  },
});

export const CardBox = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "grid",
    gridTemplateColumns: isMobileView ? "1fr" : "1fr 1fr 1fr",
    gap: "20px",
    width: "100%",
  };
});

export const CardTitle = styled(Typography)({
  fontSize: "30px",
  fontWeight: "bold",
  textAlign:"center",
});

export const CardContainer = styled(Box)(()=>{
  const isMobileView=useIsMobileView();
  return{
  padding: isMobileView? 16 : 32,
  backgroundColor: "rgb(23,96,128,0.5)",
  
    
  
  }
});


export const StyledLinkedinImg=styled(Image)({
  width:"200px",
  height:"100px",
  "@media screen and (max-width: 240px)": {
    width:"100px",
    height:"50px",
  }
})