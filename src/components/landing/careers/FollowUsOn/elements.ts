import { Box, styled } from "@mui/material";

export const SectionContainer = styled(Box)({
  marginBottom: "50px",
});

export const SectionContent = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "40px",
});

export const TextSection = styled(Box)({
  fontSize: "30px",
});

export const SingleIconBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: 75,
});
