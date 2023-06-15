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
interface Types {
  inverse: Boolean;
}

export const Header = ({ inverse }: Types) => {
  // scroll function

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      // console.log(scrollTop, "this is scroll");
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavStyles = (inverse: Boolean) => {
    return {
      position: "sticky",
      top: 0,
      width: "100%",
      // zIndex: 999,

      backgroundColor: !inverse
        ? "white"
        : isScrolled
        ? "white"
        : "transparent",
      transition: "background-color 0.3s ease-in-out",
    };
  };

  const navLogoStyle = (inverse: Boolean) => {
    return {
      color: "#0D7789",
      fontSize: {
        xl: "2.8rem",
        lg: "2rem",
        md: "2rem",
        sm: "2rem",
      },
    };
  };
  const [isMaximize, setIsMaximize] = useState(false);

  const toggleAction = () => {
    setIsMaximize(!isMaximize);
  };
  const router = useRouter();

  return (
    <ThemeProvider theme={getTheme("light")}>
      <NavBar id="nav" sx={NavStyles(inverse)}>
        <RightNav sx={{ padding: "10px" }}>
          <div
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Image
              src={MainLogo}
              alt="Main Logo"
              // width={50}
              // height={50}
              style={{ borderRadius: "10px", width: "100%", height: "100%" }}
            />
          </div>
          <NameHeading sx={navLogoStyle(inverse)}>
            Console<span style={{ color: "#224575" }}>Dot</span>
          </NameHeading>

          <div>
            <ul>
              <ListItem>
                <StyledButton
                  inverse={inverse}
                  onClick={() => router.push("/customers")}
                >
                  CUSTOMERS
                </StyledButton>
              </ListItem>

              <ListItem>
                <StyledButton
                  inverse={inverse}
                  onClick={() => router.push("/aboutUs")}
                >
                  ABOUT US{" "}
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton
                  inverse={inverse}
                  onClick={() => router.push("/exploreTechnologies")}
                >
                  TECEHNOLOGY
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton
                  inverse={inverse}
                  onClick={() => router.push("/products")}
                >
                  PRODUCTS
                </StyledButton>
              </ListItem>
            </ul>
          </div>
        </RightNav>
        <LeftNav>
          {isMaximize ? (
            <StyledButton inverse={inverse} onClick={toggleAction}>
              <MenuCloseIcon
                style={
                  !inverse
                    ? { color: "black" }
                    : isScrolled
                    ? { color: " black" }
                    : { color: "white" }
                }
              />
            </StyledButton>
          ) : (
            <StyledButton inverse={inverse} onClick={toggleAction}>
              <NavMenuIcon
                style={
                  !inverse
                    ? { color: "black" }
                    : isScrolled
                    ? { color: " black" }
                    : { color: "white" }
                }
              />
            </StyledButton>
          )}
          {isMaximize && <MenuPage />}
        </LeftNav>
      </NavBar>
    </ThemeProvider>
  );
};
