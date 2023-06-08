import { React } from "@/assets";
import { Box, Container, Button, Typography } from "@mui/material";
import {
  HeadFont,
  ImageContainer,
  Margin,
  Padding,
  Para,
  SubFont,
} from "../../utils";
import { ProductsTop } from "../../products/ProductsTop.tsx/ProductsTop";
import { InquireSection } from "../../home";
import { TechnicalExcellence } from "../TechnicalExcellence";
import { Steppers } from "../Steppers/Stepper";
import { CardWithBackground } from "../../CardWithBackground";
import { FrequentQuestions } from "../../FrequentQuestions";
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
    <Box sx={{ width: "100%" }}>
      <ProductsTop />

      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box sx={{ backgroundColor: "#f3f9fb", margin: Margin }}>
          <Container>
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
          </Container>
        </Box>
        <Box>
          <Container>
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
                  padding: Padding,
                  color: "white",
                  backgroundColor: "#87c0cd",
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
                    fontSize: Para,
                    padding: Padding,
                    textAlign: "left",
                  }}
                >
                  Our remote React developers are proficient in developing
                  visually appealing UI and UX possibilities coupled with
                  high-end solutions and efficient performance. Whether you are
                  looking to hire ReactJS developer to upscale your product
                  development capability or planning to hire dedicated React
                  team with top-of-the-line expertise in HTML + CSS, JSX,
                  JavaScript Fundamentals + ES6, DOM manipulation, Redux, Node +
                  NPM, connect with us to turbocharge your entrepreneur journey.
                  Work with the industry's top 1% react developers to extract
                  the best output combining React with Redux, Redux-Saga, Flow,
                  and React DnD.
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      backgroundColor: "#113f67",
                      color: "white",
                      fontWeight: "bold",
                      borderLeft: "none",
                      borderTopLeftRadius: "none",
                      borderBottomLeftRadius: "none",
                      "&:hover":{
                        color: "#113f67",
                        backgroundColor: "#87c0cd",
                      }
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
                    padding: Padding,
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
                    fontSize: SubFont,
                    textAlign: "left",
                    padding: Padding,
                    fontWeight: "bold",
                    color:'#226597'
                  }}
                >
                  Benefits of Hiring ReactJS developers from Bacancy
                </Typography>
                <Typography
                  sx={{
                    fontSize: Para,
                    padding: Padding,
                    textAlign: "left",
                  }}
                >
                  <ol>
                    <li>
                      Highly skilled at front-end engineering using
                      Object-Oriented JavaScript (ES5, ES6), top JavaScript
                      libraries and frameworks (ReactJS), HTML, and CSS.
                    </li>
                    <li>
                      Well-versed with programming languages like, NodeJS,
                      ReactJS, Redux, React Native, HTML, CSS3, JSON-API, REST
                      Services
                    </li>
                    <li>
                      Skilled in Typescript, Jest, Swagger, Typeorm, Node-cache,
                      Json-rules-engine, Elastic search engine, Pdfkit
                    </li>
                    <li>
                      Sound knowledge of testing applications through unit and
                      integration tests, and experience with React Testing
                      Library / Enzyme.
                    </li>
                    <li>
                      Experience with relational database (SQL Server) design
                      and implementation
                    </li>
                  </ol>
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      backgroundColor: "#113f67",
                      color: "white",
                      fontWeight: "bold",
                      borderLeft: "none",
                      borderTopLeftRadius: "none",
                      borderBottomLeftRadius: "none",
                      color:'white',
                      "&:hover":{
                        color: "#113f67",
                        backgroundColor: "#87c0cd",
                      }
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
          </Container>
        </Box>
        <Box sx={{ backgroundColor: "#f3f9fb", margin: Margin }}>
          <InquireSection />
        </Box>
        <Box>
          <Container>
            <TechnicalExcellence />
          </Container>
        </Box>
        <Box sx={{ backgroundColor: "#f3f9fb", margin: Margin }}>
          <Container>
            <Steppers />
          </Container>
        </Box>
        <Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <CardWithBackground></CardWithBackground>
              <CardWithBackground></CardWithBackground>
              <CardWithBackground></CardWithBackground>
            </Box>
          </Container>
        </Box>
        <Box sx={{ backgroundColor: "#f3f9fb", margin: Margin }}>
          <Container>
            <FrequentQuestions />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
