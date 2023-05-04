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
  RightContainer,
} from "./elements";
import Link from "next/link";
import { useIsMobileView } from "../../utils/utils";
export const RightPanel = () => {
  const isMobileView = useIsMobileView();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        flexDirection: isMobileView ? "column" : "row",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "calc(100%)",
            height: "calc(100vh - 64px - 73px - 64px)",
            textAlign: "center",
            padding: 32,
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
            <span style={{ color: "#000" }}>DEVELOPMENT</span>
          </DynamicText>

          <DescripHeading>
            <DescripItems>TOP 1% IT TALENT</DescripItems>
            <DescripItems>TIME ZONE ALIGNED</DescripItems>
            <DescripItems>EXPERIENCED TEAM</DescripItems>
          </DescripHeading>
        </div>
        <BottomPanel>
          <BottomLink href="#">LEARN MORE</BottomLink>
          <ArrowBtn href="#">
            <KeyboardArrowDownIcon />{" "}
          </ArrowBtn>
        </BottomPanel>
      </div>

      <RightBox>
        <IconsList>
          <ListItems>
            <FacebookIcon />
          </ListItems>
          <ListItems>
            <LinkedInIcon />
          </ListItems>
          <ListItems>
            <TwitterIcon />
          </ListItems>
        </IconsList>
      </RightBox>
    </div>
  );
};
