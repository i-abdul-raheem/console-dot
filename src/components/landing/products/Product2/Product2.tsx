import Image from "next/image";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import { AcCharger, HealthMonitor } from "@/assets";
import { StyledButton } from "../../Header/elements";
import { Box, styled, Container, Button } from "@mui/material";

import {
  LiWithIcon,
  Product1Container,
  TextDescrip,
  TextHeading,
} from "../Product1/elements";
import { Product2Container } from "./elements";

import { ImageContainer, MainFlexColumnWrapper } from "../../utils";
import CardWithImage from "../../CardWithImage/CardWithImage";
import { InquireSection } from "../../home";
import MediaCard from "../../MediaCard/MediaCard";
import { CardWithBackground } from "../../CardWithBackground";
export const Product2 = () => {
  return (
    <>
      <Container>
        <MainFlexColumnWrapper>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: {
                xl: "2rem 0rem",
                lg: "1.8rem 0rem",
                md: "1.5rem 0rem",
                sm: "1.2rem 0rem",
                xs: "1rem 0rem",
              },
            }}
          >
            <ImageContainer>
              <img src={AcCharger} />
            </ImageContainer>
            <ImageContainer></ImageContainer>
            <ImageContainer></ImageContainer>
          </Box>
          <Box>
            <h1>EV Charge Controller Manufacturers</h1>
            <h2>
              We are India’s 1st Leading EV Charge Controller Manufacturers
            </h2>
            <p>
              With the rise in frequency of EV charging, dynamic load management
              is vital to prevent charging overload. Bacancy’s CCS2CON is the
              central command unit responsible for communication between the EV
              and EVSE. For the first time in the Indian EV market, Bacancy’s
              next-gen CCS2 controller is set to transform the E-mobility game.
              The CCS2CON supports OCCP1.6J for remote charger monitoring and
              cloud communication. Our product is compliant with all the
              ISO/DIN/IEC standards for PLC communication.
            </p>
            <h1>
              The Most Trusted Way to Secure Your EV Charging with India’s No.1
              EV Charge Controller
            </h1>
            <p>
              Our CCS2CON is the most reliable and trusted product for the EV
              charging ecosystem. Bacancy is the first to introduce EV charge
              controller-CCS2CON to serve the Indian EV market. Our CCS2
              Controller is tested under real-time conditions with EVs.
            </p>
            <br />
            <p>We ensure that your EV Charging Equipment is</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                gap: "1rem",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
              }}
            >
              <ol>
                <li></li>
              </ol>
              <ol>
                <li></li>
              </ol>
            </Box>
            <Box>
              <Button>{`DRIVE YOUR EV MORE `}</Button>
            </Box>
          </Box>
          <Box>
            <CardWithImage />
          </Box>
          <Box>
            <InquireSection />
          </Box>
          <Box>
            <CardWithImage />
          </Box>
          <Box
            sx={{
              padding: {
                xl: "2rem 0rem",
                lg: "1.8rem 0rem",
                md: "1.5rem 0rem",
                sm: "1.2rem 0rem",
                xs: "1rem 0rem",
              },
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "space-around",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <CardWithBackground />
            <CardWithBackground />
            <CardWithBackground />
          </Box>
          {/* <TextHeading
            style={{
              fontSize: "36px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            AC Charge Controller
          </TextHeading>
          <TextDescrip
            style={{
              paddingBottom: "20px",
              paddingLeft: "32px",
              textAlign: "center",
            }}
          >
            With the green EV revolution outburst, consumers have become even
            more conscious towards the environment and invested in electric
            vehicles. However, the concern for recharging their EVs hasn’t
            diminished yet. Bacancy brings in a top-notch solution to your
            consumers’ troubles.
          </TextDescrip>

          <TextDescrip style={{ fontWeight: "bold", paddingLeft: "24px" }}>
            Types of BMS
          </TextDescrip>

          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>Types of AC Controllers</TextDescrip>
          </LiWithIcon>
          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>AC Single Gun Type 2 (7.4Kw Controller)</TextDescrip>
          </LiWithIcon>
          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>AC Dual Gun Type 2 Controller</TextDescrip>
          </LiWithIcon>
          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>AC Single Gun Type 2 (22KW)</TextDescrip>
          </LiWithIcon>
          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>Bharat AC001 Controller</TextDescrip>
          </LiWithIcon>

          <StyledButton>Explore More</StyledButton> */}
        </MainFlexColumnWrapper>
        {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={HealthMonitor}
            alt="Ac Charger"
            style={{ maxWidth: "100%", height: "" }}
          />
        </div> */}
      </Container>
    </>
  );
};
