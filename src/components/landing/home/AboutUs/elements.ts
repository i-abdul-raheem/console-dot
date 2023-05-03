import { styled, Box, Typography } from "@mui/material";

export const AboutUsContainer = styled(Box)({
  padding: "40px 10px",

  width: "auto",
  marginBottom: "10px",
});

export const SectionTitleDescrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
});

export const SectionTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "30px",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
});

export const SectionDescrip = styled(Typography)({
  fontSize: "25px",
  color: "#696969",
});

export const AgileContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  columnGap: "30px",
});

export const DetailRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  columnGap: "30px",
});

export const DetailRowBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const BoxText = styled(Typography)({
  fontSize: "15px",
});
export const BoxLabel = styled("label")({});

export const PicSectionContainer = styled(Box)({
  display: "flex",
  columnGap: "10px",
  marginTop: "50px",
});

export const PicSection=styled(Box)({
  display:'flex', flexDirection:'column',justifyContent:'center',width:'100%'
})

export const PicContainerContentSection=styled(Box)({
  display:'flex', flexDirection:'column',justifyContent:'center',width:'100%'
})