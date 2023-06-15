import { TopTech, heroImage } from "@/assets";
import { Box, Container, Card, Typography } from "@mui/material";
import {
  ContainerPadding,
  Dark,
  H1,
  HeadFont,
  Margin,
  Padding,
  Primary,
} from "../../utils";
import { TechnologyHeroSection } from "../HeroSectionOfTechnology";
import React, { useEffect, useState } from "react";
import { TechnologyCard } from "./TechnologyCard";
import { ScrollBar } from "../ScrollBar";
import Link from "next/link";
import { InquireSection } from "../../home";
import { Layout } from "../../Layout/Layout";
import { StyledDivider } from "./elements";
import { getTechnologies, techCategory } from "@/apis/technologies";

// data of the array

const topImage = heroImage;
export const ExploreTechnologies = () => {
  const [heading, setHeading] = useState<any>(null);

  const [technologies, setTechnologies] = useState<any>([]);

  const [techStack, setTechStack] = useState<any>({});

  const fetchData = () => {
    techCategory().then((res) => {
      setHeading(res?.data);
    });
    getTechnologies().then((res) => {
      setTechnologies(res?.data);
      console.log(technologies), "technologies";
    });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let temp0 = {};
    heading &&
      heading.map((head: any) => {
        const temp: any = {};
        temp[head?.title] = technologies.filter(
          (tech: any) => tech?.category === head?._id
        );
        temp0 = { ...temp0, ...temp };
      });
    setTechStack({ ...temp0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heading]);
  return (
    <Layout>
      <Box sx={{ width: "100%", backgroundColor: "white" }}>
        <TechnologyHeroSection heroImage={topImage} />
        <Container sx={{ padding: ContainerPadding }}>
          <Box
            sx={{ width: "100%", display: "flex", backgroundColor: "white" }}
          >
            <Box
              sx={{
                width: {
                  xl: "80%",
                  lg: "80%",
                  md: "80%",
                  sm: "100%",
                  xs: "100%",
                },
              }}
            >
              {techStack &&
                Object.keys(techStack).map((head0) => {
                  if (techStack[head0].length > 0) {
                    return (
                      <>
                        <H1 variant="h1" sx={{ textAlign: "center" }}>
                          {head0}
                        </H1>
                        <Box
                          id={head0}
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            padding: Padding,
                          }}
                        >
                          {techStack[head0].map(
                            (myData: any, index1: Number) => {
                              return (
                                <Link
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                    fontWeight: "bold",
                                  }}
                                  key={index1.toString()}
                                  href={`/exploreTechnologies/${myData.category}`}
                                  passHref
                                >
                                  <Box>
                                    <TechnologyCard
                                      title={myData?.title}
                                      image={myData?.hero}
                                      member={0}
                                      time=""
                                    />
                                  </Box>
                                </Link>
                              );
                            }
                          )}
                        </Box>
                      </>
                    );
                  }
                })}
            </Box>
            <Box
              sx={{
                width: "20%",
                display: {
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              <ScrollBar heading={heading} stack={techStack} />
            </Box>
          </Box>
        </Container>
        <Box sx={{ backgroundColor: "#f3f9fb" }}>
          <Container sx={{ padding: ContainerPadding }}>
            <InquireSection />
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};
