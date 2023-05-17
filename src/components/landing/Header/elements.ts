import { styled, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { getTheme } from "../utils";
import { useIsMobileView } from "../utils/utils";
export const NavBar = styled("nav")({
  display: "flex",
  position:'relative',
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #000",
  zIndex: "3",
});

export const RightNav = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobileView ? "space-between" : "flex-start",
    columnGap: 5,
    paddingLeft: 12,
    width: "100%",
  };
});
export const LeftNav = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  columnGap: "10px",
  height: 63,
  width: "20%",
});

export const HireDevBtn = styled("button")(({ theme }) => {
  const isMobileView = useIsMobileView();
  return {
    ...theme?.typography?.button1,
    backgroundColor: "rgb(23 , 96 , 128 )",
    color: "white",
    border: "none",
    fontSize: "0.6rem",
    padding: "13px",
    letterSpacing: "0.2rem",
    borderRadius: "8px",
    display: isMobileView ? "none" : "block",
    "&:hover": {
      backgroundColor: theme?.typography?.button1?.secondary,
    },
  };
});

export const NavMenuIcon = styled(MenuIcon)({
  fontSize: "3rem",
  borderLeft: "1px solid",
  padding: "8px",
});

export const NameHeading = styled(Box)({
  padding: "2px",
  fontWeight: 600,
  fontFamily: "sans-serif",
  fontSize: "2.4rem",
  color:'#fff'
});

export const ListItem = styled("li")(() => {
  const isMobileView = useIsMobileView();
  return {
    display: isMobileView ? "none" : "inline-block",
    padding: "0 1px",
    color:"#fff"
  };
});

export const StyledButton = styled("button")({
  background: "none",
  border: "none",
  fontSize: "0.8rem",
  padding: "0.5rem",
  color:"#fff"
});
