import { Box, ThemeProvider } from "@mui/material";
import { MainLogo } from "@/assets";
import Image from "next/image";

import CloseIcon from "@mui/icons-material/Close";
import {
  HireDevBtn,
  LeftNav,
  ListItem,
  MenuCloseIcon,
  NameHeading,
  NavBar,
  NavMenuIcon,
  RightNav,
  StyledButton,
  TransitionOnBtn,
} from "./elements";
import { Wrapper, getTheme } from "../utils";
import React, { useState, useEffect } from "react";
import { MenuPage } from "./MenuPage";
import { useRouter } from "next/router";

// style of nav bar

export const Header = () => {
  // scroll function

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
  const NavStyles = {
    position: "sticky",
    top: 0,
    width: "100%",
    // zIndex: 999,

    backgroundColor: isScrolled ? "white" : "transparent",
    transition: "background-color 0.3s ease-in-out",
  };

  const navLogoStyle = {
    color: isScrolled ? "black" : "white",
    fontSize: {
      xl: "2.8rem",
      lg: "2rem",
      md: "2rem",
      sm: "2rem",
    },
  };
  const [isMaximize, setIsMaximize] = useState(false);

  const toggleAction = () => {
    setIsMaximize(!isMaximize);
  };
  const router = useRouter();

  return (
    <ThemeProvider theme={getTheme("light")}>
      <NavBar
        // sx={{
        //   position: "sticky",
        //   top: 0,
        //   width: "100%",
        //   zIndex: 999,
        //   background: "linear-gradient(to right, #5D8AA8, #226597)",
        //   // background: "transparent",
        // }}
        sx={NavStyles}
      >
        <RightNav>
          <div style={{ width: "50px", height: "50px" }}>
            <Image
              src={MainLogo}
              alt="Main Logo"
              // width={50}
              // height={50}
              style={{ borderRadius: "10px", width: "100%", height: "100%" }}
            />
          </div>
          <NameHeading sx={navLogoStyle}>
            Console<span style={{ color: "rgb(23 , 96 , 128 )" }}>Dot</span>
          </NameHeading>

          <div>
            <ul>
              <ListItem>
                <StyledButton
                  onClick={() => router.push("/exploreCaseStudies")}
                >
                  CUSTOMERS
                </StyledButton>
              </ListItem>

              <ListItem>
                <StyledButton onClick={() => router.push("/casestudy")}>
                  WHAT WE DO
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton>WHO WE WORK WITH</StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton>ABOUT US </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton
                  onClick={() => router.push("/exploreTechnologies")}
                >
                  TECEHNOLOGY
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton onClick={() => router.push("/products")}>
                  PRODUCTS
                </StyledButton>
              </ListItem>
            </ul>
          </div>
        </RightNav>
        <LeftNav>
          <HireDevBtn onClick={() => router.push("/hiredevs")}>Hire</HireDevBtn>
          {isMaximize ? (
            <StyledButton onClick={toggleAction}>
              <MenuCloseIcon
                style={isScrolled ? { color: " black" } : { color: "white" }}
              />
            </StyledButton>
          ) : (
            <StyledButton onClick={toggleAction}>
              <NavMenuIcon
                style={isScrolled ? { color: " black" } : { color: "white" }}
              />
            </StyledButton>
          )}
          {isMaximize && <MenuPage />}
        </LeftNav>
      </NavBar>
    </ThemeProvider>
  );
};
