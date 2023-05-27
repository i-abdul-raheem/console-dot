import { styled, Box, Typography } from "@mui/material";

export const MenuPageContainer = styled(Box)({
  position: "absolute",
  top: 65,
  right: 65,
  height: "487px",
  width: "90%",
  transition: "1s",
  background: "#fff",
  display: "flex",
});

export const StyledMenuList = styled("li")({
  fontSize: "32px",
  paddingBottom:"16px",
  fontWeight: "bold",
  color: "#fff",
});
