import { TopTech } from "@/assets";
import { Box, Container, Card, Typography, Divider } from "@mui/material";
import { Dark, HeadFont, Margin, Padding, Primary } from "../../utils";
import { TechnologyHeroSection } from "../HeroSectionOfTechnology";
import React, { useEffect, useState } from "react";
import { TechnologyCard } from "./TechnologyCard";
import { ScrollBar } from "../ScrollBar";
import Link from "next/link";
import { InquireSection } from "../../home";
import { Footer } from "../../Footer";
import { Layout } from "../../Layout/Layout";
import { StyledDivider } from "./elements";

// data of the array
interface props {
  title: string;
  image: string;
  category: string;
  id: string;
}
export const ExploreTechnologies = () => {
  const [data, setData] = useState([
    {
      title: "React",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "React",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "React",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "React",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "React",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "MySQL",
      image: "",
      category: "Backend",
      id: "backend",
    },
    {
      title: "Vue",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "SQLite",
      image: "",
      category: "Backend",
      id: "backend",
    },
    {
      title: "Bootstrap",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "MongoDB",
      image: "",
      category: "Backend",
      id: "backend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
    {
      title: "Javascrip",
      image: "",
      category: "Frontend",
      id: "frontend",
    },
  ]);
  const [heading, setHeading] = useState<any>([]);
  const topImage =
    "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  useEffect(() => {
    data.map((item: any) => {
      if (!heading.includes(item?.category)) {
        setHeading([...heading, item?.category]);
      }
    });
  });

  return (
    <Layout>
      <Box sx={{ width: "100%", backgroundColor: "white" }}>
        <TechnologyHeroSection heroImage={topImage} />
        <Container>
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
              {heading.map((head: String, index: Number) => (
                <Box key={index.toString()}>
                  <Box
                    sx={{
                      fontSize: HeadFont,
                      textAlign: "center",
                      color: Primary,
                      margin: Margin,
                      fontWeight: "bold",
                    }}
                    id={head.toString()}
                  >
                    {head}
                    <StyledDivider></StyledDivider>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      margin: "10px",
                    }}
                  >
                    {data
                      .filter((i) => i?.category === head)
                      .map((myData, index1) => {
                        return (
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontWeight: "bold",
                            }}
                            href={`/exploreTechnologies/${myData.category}`}
                            passHref
                          >
                            <Box key={index1}>
                              <TechnologyCard
                                title={myData.title}
                                image={topImage}
                              />
                            </Box>
                          </Link>
                        );
                      })}
                  </Box>
                </Box>
              ))}
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
          <Container>
            <InquireSection />
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};
