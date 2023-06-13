import { Box, Container, Button, Typography } from "@mui/material";

import {
  Body,
  Dark,
  HeadFont,
  ImageContainer,
  MainFlexColumnWrapper,
  Margin,
  Padding,
  Para,
  Primary,
  SubFont,
} from "../../utils";
import { InquireSection } from "../../home";
import { BasicCard } from "../../BasicCard";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getProductCaseStudy } from "@/apis/products";
import { TechStackCard } from "../../casestudy/CaseStudyTop/CaseStudyTop";
export const Product2 = () => {
  const router = useRouter();
  const id = router.query;
  const [data, setData] = useState();
  const fetchData = () => {
    getProductCaseStudy(id?.id)
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(Array.isArray(data), "debug data");
  }, [data]);

  return (
    <MainFlexColumnWrapper>
      <Box>
        {data?.map((i: any, index: Number) => (
          <Box key={index}>
            <Box sx={{ backgroundColor: "white" }}>
              <Container>
                <Box sx={{ width: "100%", display: "flex" }}>
                  <Box
                    sx={{
                      width: "50%",
                      backgroundColor: Primary,
                      color: Body,
                      padding: Padding,
                    }}
                  >
                    <Typography
                      sx={{ fontSize: HeadFont, textAlign: "center" }}
                    >
                      Overview
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: SubFont,
                        padding: Padding,
                      }}
                    >
                      {i?.overview}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      backgroundColor: "white",
                      color: Body,
                      padding: Padding,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: HeadFont,
                        textAlign: "center",
                        color: Primary,
                      }}
                    >
                      TECHNICAL STACK
                    </Typography>
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
            <Box sx={{ bgcolor: "white", padding: Padding }}>
              <Container>
                <Typography
                  sx={{ fontSize: HeadFont, color: Primary, margin: Margin }}
                >
                  Challanges Prview
                </Typography>

                <Typography sx={{ fontSize: Para, margin: Margin }}>
                  {i.challenge_short}
                </Typography>
              </Container>
            </Box>
            <Box sx={{ bgcolor: Body, padding: Padding }}>
              <Container>
                <Typography
                  sx={{ fontSize: HeadFont, color: Primary, margin: Margin }}
                >
                  Challanges in Depth
                </Typography>
                <br />
                <Typography sx={{ fontSize: Para, margin: Margin }}>
                  {i.challenge_long}
                </Typography>
              </Container>
            </Box>
            <Box sx={{ bgcolor: "white", padding: Padding }}>
              <Container>
                <Typography
                  sx={{
                    fontSize: HeadFont,
                    color: Primary,
                    padding: Padding,
                    textAlign: "center",
                  }}
                >
                  Core Features Of The Project
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
                    {i?.core_features.map((feature: any, index: any) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ol>
                </Box>
              </Container>
            </Box>
            <Box>
              <Box sx={{ padding: Padding, bgcolor: Body }}>
                <Container>
                  <Typography
                    sx={{
                      fontSize: HeadFont,
                      color: Primary,
                      margin: Margin,
                      textAlign: "center",
                    }}
                  >
                    How It Works
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
                      {i?.core_features.map((work: any, index: any) => (
                        <li key={index}>{work}</li>
                      ))}
                    </ol>
                  </Box>
                </Container>
              </Box>
            </Box>
            <Box sx={{ padding: Padding }}>
              <Container>
                <Box>
                  <BasicCard members={i?.team_members}/>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{ backgroundColor: Body, margin: Margin, padding: Padding }}
            >
              <Container>
                <InquireSection />
              </Container>
            </Box>
          </Box>
        ))}
      </Box>

      {/* <Box sx={{ backgroundColor: Body }}>
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
      </Box> */}
      {/* <Box sx={{ backgroundColor: "white" }}>
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
      </Box> */}
    </MainFlexColumnWrapper>
  );
};
