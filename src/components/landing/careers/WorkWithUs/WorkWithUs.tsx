import Image from "next/image";
import {
  ComponentContainer,
  DescriptionSection,
  FlexCard,
  FlexContainer,
  TitleSection,
} from "./elements";
import { Box, Container, Typography } from "@mui/material";
import { Body, HeadFont, Margin, Padding, Para, Primary, SubFont } from "../../utils";
import { Workwithus1, Workwithus2, Workwithus3, Workwithus4 } from "@/assets";
export const WorkWithUs = () => {
  return (
    <Box sx={{ backgroundColor: Body, padding: Padding }}>
      <Container>
        <Box sx={{ color: "black" }}>
          <Typography
            sx={{
              padding: Padding,
              fontSize: HeadFont,
              color: Primary,
              textAlign: "center",
            }}
          >
            Work With Us Grow With Us
          </Typography>
          <Typography sx={{ margin: Margin, fontSize: Para }}>
            We are a mixed group of like-minded professionals who firmly believe
            in leading rather than following. ConsoleDot is a place where young
            aspirants enter and emerge out as enthusiastic leaders. We have
            formed a workplace where things get done right, and accomplishments
            get privileged accolades.
          </Typography>
          <Typography sx={{ margin: Margin, fontSize: Para }}>
            ConsoleDot is thriving on strong systems and being an exemplary
            organization, and we are striving for new development opportunities
            to add weight to your resume.
          </Typography>
        </Box>
        <FlexContainer>
          <FlexCard>
            <Image
              src={Workwithus1}
              alt="Image"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <Image
              src={Workwithus2}
              alt="Image"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </FlexCard>
          <FlexCard>
            <Image
              src={Workwithus3}
              alt="Image"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <Image
              src={Workwithus2}
              alt="Image"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </FlexCard>
          <FlexCard>
            <Image
              src={Workwithus4}
              alt="Image"
              style={{ width: "100%", height: "auto" }}
            />
          </FlexCard>
        </FlexContainer>
      </Container>
    </Box>
  );
};
