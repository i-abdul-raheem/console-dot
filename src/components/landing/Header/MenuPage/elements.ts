import { styled, Box } from "@mui/material";
import { ContainerPadding } from "../../utils";

export const MenuPageContainer = styled(Box)({
  position: "absolute",
  top: 70,
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
  listStyle: "none",
  transition: "0.3s all ease-in-out",
  "&:hover": {
    scale: "1.1",
  },
});
