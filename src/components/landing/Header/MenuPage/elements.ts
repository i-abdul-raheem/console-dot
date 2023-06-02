import { styled, Box } from "@mui/material";

export const MenuPageContainer = styled(Box)({
  position: "absolute",
  top: 65,
  right: 65,
  width: "100%",
  transition: "1s",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "left",
  height: "auto",
});

export const StyledMenuList = styled("li")({
  fontSize: "32px",
  paddingBottom: "16px",
  fontWeight: "bold",
  color: "#fff",
});
