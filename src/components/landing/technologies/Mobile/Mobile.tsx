import { React } from "@/assets";

import { Box, Container, Button, Typography } from "@mui/material";
import { HeadFont, ImageContainer, Padding, SubFont } from "../../utils";
import { ProductsTop } from "../../products/ProductsTop.tsx/ProductsTop";
import { InquireSection } from "../../home";
import { TechnicalExcellence } from "../TechnicalExcellence";

interface props {
  logo: any;
  name: string;
}

export const mobiletechs = [
  {
    logo: React,
    name: "Mobile App",
  },
  {
    logo: React,
    name: "React Native",
  },
  {
    logo: React,
    name: "Ionic",
  },
  {
    logo: React,
    name: "Flutter",
  },
  {
    logo: React,
    name: "Android",
  },
  {
    logo: React,
    name: "iPhone",
  },
  {
    logo: React,
    name: "Kotlin",
  },
  {
    logo: React,
    name: "iPad",
  },
];

export const Mobile = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9" }}>
      <ProductsTop />
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#f9f9f9",
              padding: Padding,
            }}
          >
            <ImageContainer>
              <img alt="test" />
            </ImageContainer>
            <ImageContainer></ImageContainer>
            <ImageContainer></ImageContainer>
          </Box>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                  sx: "100%",
                },
                padding: {
                  xl: "2rem 0rem",
                  lg: "1.8rem 0rem",
                  md: "1.5rem 0rem",
                  sm: "1.2rem 0rem",
                  xs: "1rem 0rem",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: HeadFont,
                  textAlign: "left",
                  padding: Padding,
                  fontWeight: "bold",
                }}
              >
                Continuously and Systematically Evolve Your Product With Our
                Vetted Angular Developers
              </Typography>
              <Typography
                sx={{
                  fontSize: SubFont,
                  padding: Padding,
                  textAlign: "left",
                }}
              >
                We have the best Angular minds with top-of-the-line expertise
                and profound knowledge of core Java patterns and J2EE design
                patterns like Adapters, Business Objects, Delegates, Service
                Locator, Singleton, DAO, and DTO. Our Full stack angular
                developers are responsible for all phases of the SDLC- Software
                Development Life Cycle that includes analysis of business
                requirements, technical specifications, product development,
                third-party software implementation, and testing to build
                complex and business-critical applications. Hire Angularjs
                developer from us to accelerate your front-end architecture.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{
                    backgroundColor: "#156380",
                    color: "white",
                    fontWeight: "bold",
                    borderLeft: "none",
                    borderTopLeftRadius: "none",
                    borderBottomLeftRadius: "none",
                  }}
                >
                  Hire React Developer
                </Button>
              </Box>
              <Box
                sx={{
                  width: {
                    xl: "50%",
                    lg: "50%",
                    md: "50%",
                    sm: "100%",
                    sx: "100%",
                  },
                  padding: {
                    xl: "2rem 0rem",
                    lg: "1.8rem 0rem",
                    md: "1.5rem 0rem",
                    sm: "1.2rem 0rem",
                    xs: "1rem 0rem",
                  },
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                width: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                  sx: "100%",
                },
                padding: {
                  xl: "2rem 0rem",
                  lg: "1.8rem 0rem",
                  md: "1.5rem 0rem",
                  sm: "1.2rem 0rem",
                  xs: "1rem 0rem",
                },
                border: "1px solid gray",
              }}
            >
              <Typography
                sx={{
                  fontSize: HeadFont,
                  textAlign: "left",
                  padding: Padding,
                  fontWeight: "bold",
                }}
              >
                Continuously and Systematically Evolve Your Product With Our
                Vetted Angular Developers
              </Typography>
              <Typography
                sx={{
                  fontSize: SubFont,
                  padding: Padding,
                  textAlign: "left",
                }}
              >
                We have the best Angular minds with top-of-the-line expertise
                and profound knowledge of core Java patterns and J2EE design
                patterns like Adapters, Business Objects, Delegates, Service
                Locator, Singleton, DAO, and DTO. Our Full stack angular
                developers are responsible for all phases of the SDLC- Software
                Development Life Cycle that includes analysis of business
                requirements, technical specifications, product development,
                third-party software implementation, and testing to build
                complex and business-critical applications. Hire Angularjs
                developer from us to accelerate your front-end architecture.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{
                    backgroundColor: "#156380",
                    color: "white",
                    fontWeight: "bold",
                    borderLeft: "none",
                    borderTopLeftRadius: "none",
                    borderBottomLeftRadius: "none",
                  }}
                >
                  Hire React Developer
                </Button>
              </Box>
              <Box
                sx={{
                  width: {
                    xl: "50%",
                    lg: "50%",
                    md: "50%",
                    sm: "100%",
                    sx: "100%",
                  },
                  padding: {
                    xl: "2rem 0rem",
                    lg: "1.8rem 0rem",
                    md: "1.5rem 0rem",
                    sm: "1.2rem 0rem",
                    xs: "1rem 0rem",
                  },
                }}
              ></Box>
            </Box>
          </Box>
          <InquireSection />
          <TechnicalExcellence />

          
        </Box>
      </Container>
    </Box>
  );
};
