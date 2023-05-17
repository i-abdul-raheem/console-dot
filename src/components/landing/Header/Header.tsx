import { Box, ThemeProvider } from "@mui/material";
import { MainLogo } from "@/assets";
import Image from "next/image";
import {
  HireDevBtn,
  LeftNav,
  ListItem,
  NameHeading,
  NavBar,
  NavMenuIcon,
  RightNav,
  StyledButton,
} from "./elements";
import { Wrapper, getTheme } from "../utils";

export const Header = () => {
  return (
    <ThemeProvider theme={getTheme("light")}>
      <NavBar>
        <RightNav>
          <Image
            src={MainLogo}
            alt="Main Logo"
            width={50}
            height={50}
          />
          <NameHeading>Console<span style={{color: "rgb(23 , 96 , 128 )"}}>Dot</span></NameHeading>

          <div>
            <ul>
              <ListItem>
                <StyledButton
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  CUSTOMERS
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  WHAT WE DO
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  WHO WE WORK WITH
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  ABOUT US{" "}
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  TECEHNOLOGY
                </StyledButton>
              </ListItem>
              <ListItem>
                <StyledButton
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  PRODUCTS
                </StyledButton>
              </ListItem>
            </ul>
          </div>
        </RightNav>
        <LeftNav>
          <HireDevBtn> Hire Developers </HireDevBtn>

          <NavMenuIcon style={{color:"#fff"}}/>
        </LeftNav>
      </NavBar>
    </ThemeProvider>
  );
};
