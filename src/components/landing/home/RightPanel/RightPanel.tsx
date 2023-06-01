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
import { useState } from "react";
export const RightPanel = () => {
  const isMobileView = useIsMobileView();

  const router = useRouter();

  return (
    <HeroImageContainer>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "calc(100% - 65px)",
            height: "calc(100vh - 64px - 73px - 64px)",
            textAlign: "center",
            padding: "32px",
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

          <DescripHeading>
            <DescripItems>TOP 1% IT TALENT</DescripItems>
            <DescripItems>TIME ZONE ALIGNED</DescripItems>
            <DescripItems>EXPERIENCED TEAM</DescripItems>
          </DescripHeading>
        </div>
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
          <ArrowBtn href="#">
            <KeyboardArrowDownIcon style={{ color: "#fff" }} />{" "}
          </ArrowBtn>
        </BottomPanel>
      </div>

      <RightBox>
        <IconsList>
          <ListItems>
            <FacebookIcon style={{ color: "#fff" }} />
          </ListItems>
          <ListItems>
            <LinkedInIcon style={{ color: "#fff" }} />
          </ListItems>
          <ListItems>
            <TwitterIcon style={{ color: "#fff" }} />
          </ListItems>
        </IconsList>
      </RightBox>
    </HeroImageContainer>
  );
};
