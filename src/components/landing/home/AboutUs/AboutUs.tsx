import Image from "next/image";
import {
  AboutUsContainer,
  BoxLabel,
  BoxText,
  DetailRow,
  DetailRowBox,
  PicContainerContentSection,
  PicSection,
  PicSectionContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";
import { Pic1 } from "@/assets";
import { ContainerPadding, H1, H2, H3, HeadFont, Wrapper } from "../../utils";
import { Box, Container, Typography } from "@mui/material";

export const AboutUs = () => {
  return (
    <Container id="about" sx={{ padding: ContainerPadding }}>
      <AboutUsContainer>
        <SectionTitleDescrip>
          <H1 variant="h1">ABOUT US</H1>
          <H2 variant="h2">
            A global leader in next-generation digital services and consulting
          </H2>
        </SectionTitleDescrip>
        <DetailRow>
          <DetailRowBox>
            <H2 variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
              12+
            </H2>
            <H3 variant="h3" sx={{ textAlign: "center" }}>
              Countries Where We Have Happy Customers
            </H3>
          </DetailRowBox>
          <DetailRowBox>
            <H2 variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
              1050+
            </H2>
            <H3 variant="h3" sx={{ textAlign: "center" }}>
              Agile Enabled Employees
            </H3>
          </DetailRowBox>
          <DetailRowBox>
            <H2 variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
              06
            </H2>
            <H3 variant="h3" sx={{ textAlign: "center" }}>
              Worldwide Office
            </H3>
          </DetailRowBox>
          <DetailRowBox>
            <H2 variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
              05
            </H2>
            <H3 variant="h3" sx={{ textAlign: "center" }}>
              Agile Coaches
            </H3>
          </DetailRowBox>
          <DetailRowBox>
            <H2 variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
              14
            </H2>
            <H3 variant="h3" sx={{ textAlign: "center" }}>
              Certified Scrum Masters
            </H3>
          </DetailRowBox>
        </DetailRow>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            columnGap: "10px",
            width: "100%",
            justifyContent: "start",
            boxSizing: "border-box",
          }}
        >
          <PicSection>
            <Image
              src={Pic1}
              alt="Image"
              style={{ width: "100%", height: "100%" }}
            />
          </PicSection>
          <PicContainerContentSection>
            <H1 variant="h1" sx={{ color: "#226597" }} mb={2}>
              Connect, Collaborate and Create
            </H1>
            <H2 variant="h2" mb={2} sx={{}}>
              Knowledge @Insights Success Magazine
            </H2>
            <H3 variant="h3" sx={{color:'#555'}}>
              Bacancy represents the connected world, offering innovative and
              customer-centric information technology experiences, enabling
              Enterprises, Associates and the Society to Rise™.
            </H3>
          </PicContainerContentSection>
        </Box>
      </AboutUsContainer>
    </Container>
  );
};
