import { styled, Box, Typography } from "@mui/material";
import { TransformImage } from "@/assets";
export const DigiContainer = styled(Box)({
  padding: "40px 10px",
  width: "auto",
  marginBottom: "10px",
});

export const SectionTitleDescrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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

export const Container = styled(Box)({});

export const BoxesContainer = styled(Box)({
  display: "flex",
  marginBottom: "10px",
  padding: "10px",
  backgroundImage: `url(${TransformImage.src})`,
});

export const SquareBox = styled(Box)({
  width: "25%",
  height: "300px",
  margin: "10px 4px 0  0",
  backgroundColor: "white",
});
