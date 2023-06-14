import { Box, Container, Button, Typography, Grid } from "@mui/material";

import {
  Body,
  ContainerPadding,
  Dark,
  H1,
  H2,
  H3,
  HeadFont,
  MainFlexColumnWrapper,
  Margin,
  Padding,
  Para,
  Primary,
} from "../../utils";
import { InquireSection } from "../../home";
import { BasicCard } from "../../BasicCard";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getProductCaseStudy } from "@/apis/products";
import { TechStackCard } from "../../casestudy/CaseStudyTop/CaseStudyTop";
import { TechnologyCard } from "../../technologies/ExploreTechnologies/TechnologyCard";
import { clock } from "@/assets";
export const Product2 = () => {
  const router = useRouter();
  const id = router.query;
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      getProductCaseStudy(id?.id)
        .then((result) => {
          setData(result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id?.id]);
  useEffect(() => {
    console.log(data, "this is data");
    // console.log(data?.[0].team_members?.length, "debug data");
  }, [data]);
  console.log(data, "this is data");
  const teamMembers = data?.[0]?.team_members || [];

  const coreFeature = data?.[0]?.core_features.length;
  console.log(coreFeature, "core Feature");
  const howItWorks = data?.[0]?.how_it_work.length;
  return (
    <MainFlexColumnWrapper>
      <Box>
        {data?.map((i: any, index: Number) => (
          <Box key={index}>
            <Box sx={{ backgroundColor: "white" }}>
              <Container sx={{ padding: ContainerPadding }}>
                <Box sx={{ width: "100%", display: "flex" }}>
                  <Box
                    sx={{
                      width: "50%",
                      backgroundColor: Primary,
                      color: Body,
                      paddingTop: "1rem",
                    }}
                  >
                    <H1 variant="h1" mb={2} sx={{ textAlign: "center" }}>
                      Overview
                    </H1>
                    <H2
                      variant="h2"
                      sx={{
                        padding: Padding,
                      }}
                      mb={2}
                    >
                      {i?.overview}
                    </H2>
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      backgroundColor: "white",
                      color: Body,
                      paddingTop: "1rem",
                    }}
                  >
                    <H1
                      variant="h1"
                      sx={{
                        textAlign: "center",
                        color: Primary,
                      }}
                      mb={2}
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
                      {i?.technologies?.map((tech: any, index: string) => (
                        <TechStackCard image={tech} key={index} />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box sx={{ bgcolor: Body, padding: Padding }}>
              <Container>
                <H1 variant="h1" sx={{ color: Primary }} mb={3}>
                  Challanges Prview
                </H1>

                <H2 variant="h2" mb={2}>
                  {i.challenge_short}
                </H2>
              </Container>
            </Box>
            <Box sx={{ bgcolor: Body, padding: Padding }}>
              <Container>
                <H1 variant="h1" sx={{ color: Primary }} mb={3}>
                  Challanges in Depth
                </H1>
                <br />
                <H2 variant="h2" mb={2}>
                  {i.challenge_long}
                </H2>
              </Container>
            </Box>
            <Box sx={{ bgcolor: "white", padding: Padding }}>
              <Container>
                {coreFeature > 0 && (
                  <Box>
                    <H1
                      variant="h1"
                      sx={{
                        color: Primary,
                        textAlign: "center",
                        mb: 3,
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
                        {data[0]?.core_features.map((tech: any, index: any) => (
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
                            <H3 variant="h3">{tech}</H3>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                )}
                {howItWorks > 0 && (
                  <Box>
                    <H1
                      sx={{
                        color: Primary,
                        textAlign: "center",
                      }}
                      mb={3}
                      variant="h1"
                    >
                      How It Works
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
                        {data[0]?.how_it_work.map((tech: any, index: any) => (
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
                            <H3 variant="h3">{tech}</H3>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                )}
              </Container>
            </Box>
            <Box sx={{ bgcolor: Body }}>
              <Container sx={{ padding: ContainerPadding }}>
                <H1
                  variant="h1"
                  sx={{
                    color: Primary,
                    textAlign: "center",
                    margin: Margin,
                    mb: 3,
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
                    <BasicCard members={data[0]?.team_members.length} />
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
                      time="On going since 2023"
                    />
                  </Box>
                </Box>
              </Container>
            </Box>

            <Box
              sx={{
                backgroundColor: "white",
                margin: Margin,
                padding: Padding,
              }}
            >
              <Container>
                <InquireSection />
              </Container>
            </Box>
          </Box>
        ))}
      </Box>
    </MainFlexColumnWrapper>
  );
};
