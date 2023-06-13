import { url } from "inspector";
import { useEffect, useState } from "react";
import { CasestudyTop, ChallangesSolutions, TopInnerBox } from "./elements";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";
import { Box, Container, Typography, Avatar } from "@mui/material";
import {
  Body,
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
        <img
          src={`https://api.consoledot.com/file/${img}`}
          alt="image"
          style={{ width: "70px", height: "70px", borderRadius: "10px" }}
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

  const [data, setData] = useState(null);

  const fetchData = () => {
    getCaseStudy(id?.id)
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

  return (
    <Layout>
      <Box>
        <CasestudyTop />
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
                <Typography sx={{ fontSize: HeadFont, textAlign: "center" }}>
                  Overview
                </Typography>
                <Typography
                  sx={{
                    fontSize: SubFont,
                    padding: Padding,
                  }}
                >
                  {data?.overview}
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
                  {data?.technologies?.map((tech: any, index: string) => (
                    <TechStackCard image={tech} key={index} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: Body }}>
          <Container>
            <Typography
              sx={{
                fontSize: HeadFont,

                color: Primary,
                textAlign: "center",
                padding: Padding,
              }}
            >
              Challenges & Solutions
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <ChallangesSolutions>
                <Typography sx={{ fontSize: HeadFont, color: Primary }}>
                  Overview
                </Typography>
                <Typography sx={{ fontSize: Para }}>
                  {data?.challenge_short}
                </Typography>
              </ChallangesSolutions>
              <ChallangesSolutions>
                <Typography sx={{ fontSize: HeadFont, color: Primary }}>
                  Overview
                </Typography>
                <Typography sx={{ fontSize: Para }}>
                  {data?.challenge_long}
                </Typography>
              </ChallangesSolutions>
            </Box>
          </Container>
        </Box>
        <Box>
          <Container>
            <Typography
              sx={{
                fontSize: HeadFont,
                color: Primary,
                textAlign: "center",
                margin: Margin,
              }}
            >
              Core Features
            </Typography>
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
              {data?.core_features.map((tech: any, index: any) => (
                <ol key={index} style={{ color: "black" }}>
                  <Typography sx={{ fontSize: Para }}>{tech}</Typography>
                </ol>
              ))}
            </Box>
            <Typography
              sx={{
                fontSize: HeadFont,
                color: Primary,
                textAlign: "center",
                margin: Margin,
              }}
            >
              How It Works
            </Typography>
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
            <Box>
              <Typography
                sx={{
                  fontSize: HeadFont,
                  color: Primary,
                  textAlign: "center",
                  margin: Margin,
                }}
              >
                Developers & Time Frame
              </Typography>
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
                  {/* <TechnologyCard title="Developers" image={""} member={12} />
                   */}
                  {data?.team_members}
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
