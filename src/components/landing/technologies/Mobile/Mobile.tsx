import { React } from "@/assets";
import { Box, Container, Button, Typography } from "@mui/material";
import {
  Body,
  ButtonPadding,
  ContainerPadding,
  Dark,
  H1,
  H2,
  Padding,
  Primary,
} from "../../utils";
import { ProductsTop } from "../../products/ProductsTop.tsx/ProductsTop";
import { InquireSection } from "../../home";
import { TechnicalExcellence } from "../TechnicalExcellence";
import { Steppers } from "../Steppers/Stepper";
import { Tech } from "@/assets";
import { FrequentQuestions } from "../../FrequentQuestions";
import { Layout } from "../../Layout/Layout";
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
    <Layout>
      <Box sx={{ width: "100%" }}>
        <ProductsTop sideImage={Tech} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box>
            <Container sx={{ padding: ContainerPadding }}>
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
                    backgroundColor: Primary,
                  }}
                >
                  <H1
                    variant="h1"
                    sx={{
                      textAlign: "left",
                      color: "white",
                    }}
                    mb={3}
                  >
                    Continuously and Systematically Evolve Your Product With Our
                    Vetted Angular Developers
                  </H1>
                  <H2
                    variant="h2"
                    sx={{
                      textAlign: "left",
                    }}
                    mb={2}
                  >
                    Our remote React developers are proficient in developing
                    visually appealing UI and UX possibilities coupled with
                    high-end solutions and efficient performance. Whether you
                    are looking to hire ReactJS developer to upscale your
                    product development capability or planning to hire dedicated
                    React team with top-of-the-line expertise in HTML + CSS,
                    JSX, JavaScript Fundamentals + ES6, DOM manipulation, Redux,
                    Node + NPM, connect with us to turbocharge your entrepreneur
                    journey. Work with the industry`&apos;s top 1% react
                    developers to extract the best output combining React with
                    Redux, Redux-Saga, Flow, and React DnD.
                  </H2>
                  <Box sx={{ display: "flex" }}>
                    <Button
                      sx={{
                        backgroundColor: Dark,
                        color: "white",
                        fontWeight: "bold",
                        borderLeft: "none",
                        borderTopLeftRadius: "none",
                        borderBottomLeftRadius: "none",
                        padding: ButtonPadding,
                        "&:hover": {
                          border: "1px solid white",
                          backgroundColor: Dark,
                        },
                      }}
                    >
                      Hire React Developer
                    </Button>
                  </Box>
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
                    border: "1px solid gray",
                    borderBottom: "none ",
                  }}
                >
                  <H1
                    variant="h1"
                    sx={{
                      textAlign: "left",

                      color: Primary,
                    }}
                    mb={2}
                  >
                    Benefits of Hiring ReactJS developers from Bacancy
                  </H1>
                  <H2
                    variant="h2"
                    sx={{
                      textAlign: "left",
                    }}
                    mb={2}
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
                        Skilled in Typescript, Jest, Swagger, Typeorm,
                        Node-cache, Json-rules-engine, Elastic search engine,
                        Pdfkit
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
                  </H2>
                  <Box sx={{ display: "flex" }}>
                    <Button
                      sx={{
                        backgroundColor: Primary,
                        color: "white",
                        fontWeight: "bold",
                        borderLeft: "none",
                        borderTopLeftRadius: "none",
                        borderBottomLeftRadius: "none",
                        padding: ButtonPadding,
                        "&:hover": {
                          backgroundColor: Dark,
                        },
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
              </Box>
            </Container>
          </Box>
          <Box sx={{ backgroundColor: Body, padding: ContainerPadding }}>
            <InquireSection />
          </Box>
          <Box>
            <Container sx={{ padding: ContainerPadding }}>
              <TechnicalExcellence head={""} specs={[]} />
            </Container>
          </Box>
          <Box sx={{ backgroundColor: Body }}>
            <Container sx={{ padding: ContainerPadding }}>
              <Steppers />
            </Container>
          </Box>
          <Box sx={{ backgroundColor: Body }}>
            <Container sx={{ padding: ContainerPadding }}>
              <FrequentQuestions />
            </Container>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
