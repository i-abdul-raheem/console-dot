import { useEffect } from "react";
import { useState } from "react";
import { styled, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Primary, getTheme } from "../utils";
import { useIsMobileView } from "../utils/utils";
import CloseIcon from "@mui/icons-material/Close";
export const NavBar = styled("nav")(() => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      console.log(scrollTop, "this is scroll");
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: isScrolled ? "0.8px solid #dadada" : "0.8px solid #4d4d4d",
    zIndex: "3",
  };
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
    backgroundColor: Primary,
    color: "white",
    border: "none",
    fontSize: "0.6rem",
    cursor: "pointer",
    padding: "13px",
    letterSpacing: "0.2rem",
    borderRadius: "8px",
    display: isMobileView ? "none" : "block",
  };
});

export const MenuCloseIcon = styled(CloseIcon)(() => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      console.log(scrollTop, "this is scroll");
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    fontSize: "3rem",
    borderLeft: isScrolled ? "0.8px solid #dadada" : "0.8px solid #4d4d4d",
    padding: "4px",
    transition: "1s",
  };
});

export const NavMenuIcon = styled(MenuIcon)(() => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      console.log(scrollTop, "this is scroll");
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    fontSize: "3rem",
    borderLeft: isScrolled ? "0.8px solid #dadada" : "0.8px solid #4d4d4d",
    padding: "4px",
  };
});

export const NameHeading = styled(Box)({
  padding: "2px",
  fontWeight: 600,
  fontFamily: "sans-serif",
  // fontSize: "2.4rem",
  color: "#fff",
});

export const ListItem = styled("li")(() => {
  const isMobileView = useIsMobileView();
  return {
    display: isMobileView ? "none" : "inline-block",
    padding: "0 1px",
    color: "#fff",
  };
});

interface Types {
  inverse: Boolean
}

export const StyledButton = styled("button")(({inverse} : Types) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      console.log(scrollTop, "this is scroll");
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    background: "none",
    border: "none",
    fontSize: "0.8rem",
    padding: "0.5rem",
    color: !inverse ? "black" : isScrolled ? "black" : "white",
    cursor: "pointer",
  };
});

export const TransitionOnBtn = styled(Box)({
  width: "0px",
  height: "0px",
  transition: "2s",
  "&:hover": {},
});
