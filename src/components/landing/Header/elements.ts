import { styled, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Primary, getTheme } from "../utils";
import { useIsMobileView } from "../utils/utils";
import CloseIcon from '@mui/icons-material/Close';
export const NavBar = styled("nav")({
  display: "flex",
  position:'relative',
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #fff",
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
    backgroundColor:Primary ,
    color: "white",
    border: "none",
    fontSize: "0.6rem",
    cursor:"pointer",
    padding: "13px",
    letterSpacing: "0.2rem",
    borderRadius: "8px",
    display: isMobileView ? "none" : "block",
  };
});

export const MenuCloseIcon=styled(CloseIcon)({
  fontSize: "3rem",
  borderLeft: "1px solid",
  padding: "4px",
  transition:"1s"
})

export const NavMenuIcon = styled(MenuIcon)({
  fontSize: "3rem",
  borderLeft: "1px solid",
  padding: "4px",
});

export const NameHeading = styled(Box)({
  padding: "2px",
  fontWeight: 600,
  fontFamily: "sans-serif",
  // fontSize: "2.4rem",
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
  color:"#fff",
  cursor:"pointer"
});


export const TransitionOnBtn=styled(Box)({
  width:'0px', height:"0px", transition:"2s", "&:hover":{}
})

