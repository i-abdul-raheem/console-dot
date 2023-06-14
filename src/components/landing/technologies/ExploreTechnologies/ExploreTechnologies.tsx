import { TopTech, heroImage } from "@/assets";
import { Box, Container, Card, Typography } from "@mui/material";
import {
  ContainerPadding,
  Dark,
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
import { getTechnologies } from "@/apis/technologies";

// data of the array
interface props {
  title: string;
  image: string;
  category: string;
  id: string;
}
const topImage = heroImage;
export const ExploreTechnologies = () => {
  const [heading, setHeading] = useState<any>([]);

  const [technologies, setTechnologies] = useState<any>([]);

  useEffect(() => {
    const fetchData = () => {
      getTechnologies().then((res) => {
        setTechnologies(res?.data);
        console.log(technologies);
      });
    };
    fetchData();
  }, [technologies]);

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
              {/* {heading.map((head: String, index: Number) => ( */}
              <Box>
                <Box
                  sx={{
                    fontSize: HeadFont,
                    textAlign: "center",
                    color: Primary,
                    margin: Margin,
                    fontWeight: "bold",
                  }}
                  // id={head.toString()}
                >
                  {/* {head} */}
                  <StyledDivider></StyledDivider>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    padding: Padding,
                  }}
                >
                  {technologies.map((myData: any, index1: Number) => {
                    const temp = {};
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
                  })}
                </Box>
              </Box>
              {/* ))} */}
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
              <ScrollBar heading={heading} />
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
