import { url } from "inspector";
import { useEffect } from "react";
import { CasestudyTop, ChallangesSolutions, TopInnerBox } from "./elements";
import { StyledText } from "../../careers/WorkingAtConsoleDot/elements";
import { Box, Container, Typography, Avatar } from "@mui/material";
import { HeadFont, Padding, Para, SubFont } from "../../utils";
import { Black, Tech } from "@/assets";
import { TechnologyCard } from "../../technologies/ExploreTechnologies/TechnologyCard";
import { InquireSection } from "../../home";
import { Layout } from "../../Layout/Layout";
export const TechStackCard = ({ image }: any) => {
  return (
    <>
      <Box sx={{ width: "70px", height: "70px" }}>
        <Avatar
          src={image}
          alt="image"
          sx={{ width: "70px", height: "70px", borderRadius: "10px" }}
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
  return (
    <Layout>
      <CasestudyTop>
        {/* <Container sx={{ position: "absolute", top: "80%" }}>
          <TopInnerBox></TopInnerBox>
        </Container> */}
      </CasestudyTop>
      <Container>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              backgroundColor: "#226597",
              color: "#f3f9fb",
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
              Syed Brothers. is a multinational corporation that operates in
              multiple countries. They have a complex procurement process with
              multiple stakeholders involved. The company wants to streamline
              their procurement system to reduce costs, improve efficiency, and
              increase transparency.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "50%",
              color: "#226597",
              backgroundColor: "#f3f9fb",
              padding: Padding,
            }}
          >
            <Typography sx={{ fontSize: HeadFont, textAlign: "center" }}>
              TECHNICAL STACK
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {TechStacks.map((tech, index) => (
                <TechStackCard image={tech.img} key={index} />
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: HeadFont,
              color: "#226597",
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
              <Typography sx={{ fontSize: HeadFont, color: "#226597" }}>
                Overview
              </Typography>
              <Typography sx={{ fontSize: Para }}>
                Syed Brothers. is a multinational corporation that operates in
                multiple countries. They have a complex procurement process with
                multiple stakeholders involved. The company wants to streamline
                their procurement system to reduce costs, improve efficiency,
                and increase transparency.
              </Typography>
            </ChallangesSolutions>
            <ChallangesSolutions>
              <Typography sx={{ fontSize: HeadFont, color: "#226597" }}>
                Overview
              </Typography>
              <Typography sx={{ fontSize: Para }}>
                Syed Brothers. is a multinational corporation that operates in
                multiple countries. They have a complex procurement process with
                multiple stakeholders involved. The company wants to streamline
                their procurement system to reduce costs, improve efficiency,
                and increase transparency.
              </Typography>
            </ChallangesSolutions>
            <ChallangesSolutions>
              <Typography sx={{ fontSize: HeadFont, color: "#226597" }}>
                Overview
              </Typography>
              <Typography sx={{ fontSize: Para }}>
                Syed Brothers. is a multinational corporation that operates in
                multiple countries. They have a complex procurement process with
                multiple stakeholders involved. The company wants to streamline
                their procurement system to reduce costs, improve efficiency,
                and increase transparency.
              </Typography>
            </ChallangesSolutions>
            <ChallangesSolutions>
              <Typography sx={{ fontSize: HeadFont, color: "#226597" }}>
                Overview
              </Typography>
              <Typography sx={{ fontSize: Para }}>
                Syed Brothers. is a multinational corporation that operates in
                multiple countries. They have a complex procurement process with
                multiple stakeholders involved. The company wants to streamline
                their procurement system to reduce costs, improve efficiency,
                and increase transparency.
              </Typography>
            </ChallangesSolutions>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: HeadFont, color: "#226597", textAlign: "center" }}
          >
            Core Features
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            {TechStacks.map((tech, index) => (
              <ol key={index}>
                <Typography sx={{ fontSize: Para }}>{tech.feature}</Typography>
              </ol>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <TechnologyCard title="Developers" image={""} member={12} />
          <TechnologyCard
            title="Time Frame"
            image={""}
            time="On going since 2023"
          />
        </Box>
        <InquireSection />
      </Container>
    </Layout>
  );
};
