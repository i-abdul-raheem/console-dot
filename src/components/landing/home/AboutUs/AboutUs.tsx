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
import { Wrapper } from "../../utils";
import { Box, Container } from "@mui/material";

export const AboutUs = () => {
  return (
    <Container>
      <AboutUsContainer>
        <SectionTitleDescrip>
          <SectionTitle>ABOUT US</SectionTitle>
          <SectionDescrip>
            A global leader in next-generation digital services and consulting
          </SectionDescrip>
        </SectionTitleDescrip>
        <DetailRow>
          <DetailRowBox>
            <BoxLabel>12+</BoxLabel>
            <BoxText>Countries Where We Have Happy Customers</BoxText>
          </DetailRowBox>
          <DetailRowBox>
            <BoxLabel>1050+</BoxLabel>
            <BoxText>Agile Enabled Employees</BoxText>
          </DetailRowBox>
          <DetailRowBox>
            <BoxLabel>06</BoxLabel>
            <BoxText>Worldwide Office</BoxText>
          </DetailRowBox>
          <DetailRowBox>
            <BoxLabel>05</BoxLabel>
            <BoxText>Agile Coaches</BoxText>
          </DetailRowBox>
          <DetailRowBox>
            <BoxLabel>14</BoxLabel>
            <BoxText>Certified Scrum Masters</BoxText>
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
            <h2 style={{ margin: "10px 0 " }}>
              Agile, A Process Delivering Values & Successful Products
            </h2>
            <h4
              style={{
                margin: "0",
                // margin: { xl: "19px", lg: "15px", md: "10px", sm: "5px", xs: "3px" },
              }}
            >
              Knowledge @Insights Success Magazine
            </h4>
            <p style={{ margin: "0" }}>
              Bacancy represents the connected world, offering innovative and
              customer-centric information technology experiences, enabling
              Enterprises, Associates and the Society to Rise™.
            </p>
          </PicContainerContentSection>
        </Box>
      </AboutUsContainer>
    </Container>
  );
};
