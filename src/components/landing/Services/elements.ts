import { Box, styled, Typography } from "@mui/material";

export const ServiceCard = styled(Box)({
  display: "flex",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  flexDirection: "column",
  maxWidth: "380px",
  padding: "25px 15px",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
  "&:last-child": "0",
  "&:hover": {
    boxShadow: "0px 0px 20px 2px rgba(0, 0, 0, 0.2)",
  },
});
