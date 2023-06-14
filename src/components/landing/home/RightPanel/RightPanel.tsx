import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typewriter from "typewriter-effect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  ListItems,
  RightBox,
  IconsList,
  Heading,
  SubHeading,
  DescripHeading,
  DescripItems,
  DynamicText,
  BottomPanel,
  BottomLink,
  ArrowBtn,
  HeroImageContainer,
} from "./elements";
import Link from "next/link";
import { useIsMobileView } from "../../utils/utils";
import { Wrapper } from "../../utils";
import { useRouter } from "next/router";
import { AboutUs } from "../AboutUs";
import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
export const RightPanel = () => {


  const [headerHeight, setClientHeight] = useState(0);
  useEffect(() => {
    const elem:any = document.getElementById("nav");
    setClientHeight(elem?.clientHeight);
  }, []);

  return (
    <HeroImageContainer>
      <div style={{ width: "100%", position: "relative" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "calc(100% - 65px)",
            minHeight: "calc(100vh - 83px - 70px - 51.41px)",
            textAlign: "center",
            position: "relative",
            marginTop: `calc(${headerHeight}px + 40px)`,
            marginBottom: "82.41px",
          }}
        >
          <Heading>DEDICATED TO INNOVATION </Heading>
          <SubHeading>
            A LEADER IN{" "}
            <span style={{ color: "rgb(23 , 96 , 128 ),", fontWeight: "bold" }}>
              AGILE
            </span>{" "}
            AND{" "}
            <span style={{ color: "rgb(23 , 96 , 128 )", fontWeight: "bold" }}>
              LEAN
            </span>
          </SubHeading>
          <DynamicText>
            <Typewriter
              options={{
                strings: ["HARDWARE", "SOFTWARE", "EMBEDDED"],
                autoStart: true,
                loop: true,
              }}
            />
            &nbsp;
            <span style={{ color: "#fff" }}>DEVELOPMENT</span>
          </DynamicText>

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <DescripItems>TOP 1% IT TALENT</DescripItems>
            <DescripItems>TIME ZONE ALIGNED</DescripItems>
            <DescripItems>EXPERIENCED TEAM</DescripItems>
          </Box>
        </Container>
        <BottomPanel>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "16px",
              color: "white",
            }}
          >
            LEARN MORE
          </button>
          <ArrowBtn href="#about">
            <KeyboardArrowDownIcon style={{ color: "#fff" }} />{" "}
          </ArrowBtn>
        </BottomPanel>
      </div>

      <RightBox>
        <IconsList>
          <ListItems>
            <a
              href="https://www.linkedin.com/company/consoledot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon style={{ color: "#fff" }} />
            </a>
          </ListItems>
          <ListItems>
            <a
              href="https://www.linkedin.com/company/consoledot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ color: "#fff" }} />
            </a>
          </ListItems>
          <ListItems>
            <a
              href="https://www.linkedin.com/company/consoledot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon style={{ color: "#fff" }} />
            </a>
          </ListItems>
        </IconsList>
      </RightBox>
    </HeroImageContainer>
  );
};
