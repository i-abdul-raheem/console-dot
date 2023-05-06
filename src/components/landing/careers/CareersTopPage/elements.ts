import { Box, styled } from "@mui/material";

export const CareerContainer = styled(Box)({
  display: "flex",
  padding: "70px",
  columnGap: "50px",
});

export const StyledButton = styled(Box)({
  backgroundColor: "rgb(23 , 96 , 128 )",
  border: "none",
  padding: "15px 100px",
  display: "flex",
  justifyContent: "center",
  color: "white",
  fontSize: "25px",
  borderRadius: "10px",
  "&:hover":{
    backgroundColor:"rgb(23 , 96 , 200 )"
  }
});

export const ImageSection = styled(Box)({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
});

export const LeftCard = styled(Box)({
  width: "100%",
});

export const LeftCardHeading = styled(Box)({
  fontSize: "40px",
  marginBottom: "30px",
  lineHeight: "normal",
});

export const LeftCardParagraph = styled(Box)({
  fontSize: "25px",
  marginBottom: "30px",
});
