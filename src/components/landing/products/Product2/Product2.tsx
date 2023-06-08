import { AcCharger, HealthMonitor } from "@/assets";
import { StyledButton } from "../../Header/elements";
import { Box, styled, Container, Button, Typography } from "@mui/material";

import { Product2Container } from "./elements";

import {
  Body,
  HeadFont,
  ImageContainer,
  MainFlexColumnWrapper,
  Margin,
  Padding,
  Para,
  Primary,
  SubFont,
} from "../../utils";
import CardWithImage from "../../CardWithImage/CardWithImage";
import { InquireSection } from "../../home";
import MediaCard from "../../MediaCard/MediaCard";
import { CardWithBackground } from "../../CardWithBackground";
import { Layout } from "../../Layout/Layout";

export const Product2 = () => {
  const mediaCardImageUrl =
    "https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80s";
  const cardWithImageUrl =
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
  const CardWithBackgroundUrl =
    "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  return (
    <MainFlexColumnWrapper>
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
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
              <img src={AcCharger} alt="test" />
            </ImageContainer>
            <ImageContainer></ImageContainer>
            <ImageContainer></ImageContainer>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: Body }}>
        <Container>
          <Box>
            <Typography
              sx={{ fontSize: HeadFont, color: Primary, margin: Margin }}
            >
              EV Charge Controller Manufacturers
            </Typography>
            <Typography sx={{ fontSize: SubFont, margin: Margin }}>
              We are India’s 1st Leading EV Charge Controller Manufacturers
            </Typography>
            <Typography sx={{ fontSize: Para, margin: Margin }}>
              With the rise in frequency of EV charging, dynamic load management
              is vital to prevent charging overload. Bacancy’s CCS2CON is the
              central command unit responsible for communication between the EV
              and EVSE. For the first time in the Indian EV market, Bacancy’s
              next-gen CCS2 controller is set to transform the E-mobility game.
              The CCS2CON supports OCCP1.6J for remote charger monitoring and
              cloud communication. Our product is compliant with all the
              ISO/DIN/IEC standards for PLC communication.
            </Typography>
            <Typography
              sx={{ fontSize: HeadFont, color: Primary, margin: Margin }}
            >
              EV Charge Controller Manufacturers
            </Typography>
            <Typography sx={{ fontSize: SubFont, margin: Margin }}>
              We are India’s 1st Leading EV Charge Controller Manufacturers
            </Typography>
            <br />
            <Typography sx={{ fontSize: Para, margin: Margin }}>
              With the rise in frequency of EV charging, dynamic load management
              is vital to prevent charging overload. Bacancy’s CCS2CON is the
              central command unit responsible for communication between the EV
              and EVSE. For the first time in the Indian EV market, Bacancy’s
              next-gen CCS2 controller is set to transform the E-mobility game.
              The CCS2CON supports OCCP1.6J for remote charger monitoring and
              cloud communication. Our product is compliant with all the
              ISO/DIN/IEC standards for PLC communication.
            </Typography>
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
              <Button variant="contained">{`DRIVE YOUR EV MORE `}</Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
          <Box
            sx={{
              padding: Padding,
              margin: Margin,
            }}
          >
            <CardWithImage image={cardWithImageUrl} />
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: Body, margin: Margin, padding: Padding }}>
        <Container>
          <InquireSection />
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
          <Box
            sx={{
              padding: Padding,
              margin: Margin,
            }}
          >
            <CardWithImage image={cardWithImageUrl} />
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: Body }}>
        <Container>
          <Box
            sx={{
              margin: Margin,
              padding: Padding,
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
            <MediaCard mediaCardImageUrl={mediaCardImageUrl} />
            <MediaCard mediaCardImageUrl={mediaCardImageUrl} />
            <MediaCard mediaCardImageUrl={mediaCardImageUrl} />
            <MediaCard mediaCardImageUrl={mediaCardImageUrl} />
            <MediaCard mediaCardImageUrl={mediaCardImageUrl} />
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
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

              padding: Padding,
              margin: Margin,
            }}
          >
            <CardWithBackground CardWithBackgroundUrl={CardWithBackgroundUrl} />
            <CardWithBackground CardWithBackgroundUrl={CardWithBackgroundUrl} />
            <CardWithBackground CardWithBackgroundUrl={CardWithBackgroundUrl} />
          </Box>
        </Container>
      </Box>
    </MainFlexColumnWrapper>
  );
};
