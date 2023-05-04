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
} from "./elements";
import { getTheme } from "../utils";

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
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  CUSTOMERS
                </button>
              </ListItem>
              <ListItem>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  WHAT WE DO
                </button>
              </ListItem>
              <ListItem>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  ABOUT US{" "}
                </button>
              </ListItem>
              <ListItem>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  TECEHNOLOGY
                </button>
              </ListItem>
              <ListItem>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    padding: "0.5rem",
                  }}
                >
                  PRODUCTS
                </button>
              </ListItem>
            </ul>
          </div>
        </RightNav>
        <LeftNav>
          <HireDevBtn> Hire Developers </HireDevBtn>

          <NavMenuIcon />
        </LeftNav>
      </NavBar>
    </ThemeProvider>
  );
};
