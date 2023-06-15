import { url } from "inspector";
import { useEffect, useState } from "react";
import { CasestudyTop, ChallangesSolutions, TopInnerBox } from "./elements";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";
import { Box, Container, Typography, Avatar, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import {
  Body,
  ContainerPadding,
  H1,
  H2,
  H3,
  HeadFont,
  Margin,
  Padding,
  Para,
  Primary,
  SubFont,
} from "../../utils";
import { useRouter } from "next/router";
import { Black, Tech } from "@/assets";
import { TechnologyCard } from "../../technologies/ExploreTechnologies/TechnologyCard";
import { InquireSection } from "../../home";
import { Layout } from "../../Layout/Layout";
import { getCaseStudy } from "@/apis/caseStudy";
import { getSingleTechnology } from "@/apis/technologies";
import Image from "next/image";
import { BasicCard } from "../../BasicCard";
export const TechStackCard = ({ image }: any) => {
  const [img, setImg] = useState("");
  useEffect(() => {
    getSingleTechnology(image).then((res) => {
      setImg(res?.data?.hero);
    });
  }, [image]);
  return (
    <>
      <Box sx={{ width: "70px", height: "70px" }}>
        <Image
          width={80}
          height={80}
          src={`https://api.consoledot.com/file/${img}`}
          alt="image"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        />
      </Box>
    </>
  );
};

export const TechStacks = [
  { img: Black, feature: "Multi-Currency Support", dev: "Developers" },
  { img: Black, feature: "Multi-Currency Support" },
  { img: Black, feature: "Order Customization" },
  { img: Black, feature: "Trade Execution Tools" },
  { img: Black, feature: "Real-Time Market Data" },
];

export const CaseStudyTop = () => {
  const router = useRouter();
  const id = router.query;
  // console.log(id, "debug");

  const [data, setData] = useState({
    core_features: [],
    how_it_work: [],
    overview: "",
    technologies: [],
    challenge_short: "",
    challenge_long: "",
    team_members: [],
  });

  useEffect(() => {
    const fetchData = () => {
      getCaseStudy(id?.id)
        .then((result) => {
          setData(result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [id?.id]);

  console.log(data);

  const coreFeature = data?.core_features.length;
  const howItWorks = data?.how_it_work.length;

  console.log(howItWorks);

  return (
    <Layout>
      <Box>
        <CasestudyTop />
        <Box sx={{ backgroundColor: "white" }}>
          <Container sx={{ padding: ContainerPadding }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <Box
                sx={{
                  width: "50%",
                  backgroundColor: Primary,
                  color: Body,
                  padding: ContainerPadding,
                }}
              >
                <H1 variant="h1" sx={{ textAlign: "center" }} mb={2}>
                  Overview
                </H1>
                <H2 variant="h2">{data?.overview}</H2>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  backgroundColor: "white",
                  color: Body,
                  padding: ContainerPadding,
                }}
              >
                <H1
                  mb={2}
                  variant="h1"
                  sx={{
                    textAlign: "center",
                    color: Primary,
                  }}
                >
                  TECHNICAL STACK
                </H1>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  {data?.technologies?.map((tech: any, index: Number) => (
                    <TechStackCard image={tech} key={index} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: Body }}>
          <Container sx={{ padding: ContainerPadding }}>
            <H1
              variant="h1"
              sx={{
                color: Primary,
                textAlign: "center",
                padding: Padding,
              }}
            >
              Challenges & Solutions
            </H1>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <ChallangesSolutions>
                <H1 variant="h2" sx={{ color: Primary, mb: 3 }}>
                  Summary
                </H1>
                <H2 variant="h2" sx={{ mb: 2 }}>
                  {data?.challenge_short}
                </H2>
              </ChallangesSolutions>
              <ChallangesSolutions>
                <H1 variant="h2" sx={{ color: Primary, mb: 3 }}>
                  Details
                </H1>
                <H2 variant="h2" sx={{ mb: 2 }}>
                  {data?.challenge_long}
                </H2>
              </ChallangesSolutions>
            </Box>
          </Container>
        </Box>
        <Box>
          <Container>
            {coreFeature > 0 && (
              <Box>
                <H1
                  variant="h1"
                  sx={{
                    color: Primary,
                    textAlign: "center",
                    margin: Margin,
                  }}
                >
                  Core Features
                </H1>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: Margin,
                  }}
                >
                  <Grid container sx={{ width: "100%" }}>
                    {data?.core_features.map((tech: any, index: any) => (
                      <Grid
                        lg={6}
                        sm={12}
                        item
                        key={index}
                        style={{
                          color: "black",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          columnGap: "20px",
                        }}
                      >
                        <CheckIcon />
                        <H2 variant="h2">{tech}</H2>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            )}
            {howItWorks > 0 && (
              <Box>
                <H1
                  variant="h2"
                  sx={{
                    color: Primary,
                    textAlign: "center",
                    margin: Margin,
                  }}
                >
                  How It Works
                </H1>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "60%",
                    alignItems: "center",
                    margin: Margin,
                  }}
                >
                  {data?.how_it_work.map((tech: any, index: any) => (
                    <ol key={index} style={{ color: "black" }}>
                      <Typography sx={{ fontSize: Para }}>{tech}</Typography>
                    </ol>
                  ))}
                </Box>
              </Box>
            )}
            <Box>
              <H1
                variant="h1"
                sx={{
                  fontSize: HeadFont,
                  color: Primary,
                  textAlign: "center",
                  margin: Margin,
                }}
              >
                Developers & Time Frame
              </H1>
              <Box
                sx={{
                  display: "flex",
                  gap: "2rem",
                  width: "100%",
                  flexDirection: {
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column-reverse",
                  },
                  mb: 5,
                }}
              >
                <Box
                  sx={{
                    borderRight: "1px solid gray",
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                    width: {
                      xl: "50%",
                      lg: "50%",
                      md: "50%",
                      sm: "100%",
                      xs: "100%",
                    },
                  }}
                >
                  <BasicCard members={data?.team_members.length} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: {
                      xl: "50%",
                      lg: "50%",
                      md: "50%",
                      sm: "100%",
                      xs: "100%",
                    },
                  }}
                >
                  <TechnologyCard
                    title="Time Frame"
                    image={""}
                    time="On going since 2023"
                    member={12}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: Body }}>
          <InquireSection />
        </Box>
      </Box>
    </Layout>
  );
};
