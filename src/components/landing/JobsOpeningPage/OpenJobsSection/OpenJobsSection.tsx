import { JobsLinkedin } from "@/assets";
import Image from "next/image";
import {
  CardBox,
  CardContainer,
  CardSection,
  CardTitle,
  SectionButton,
  Singlecard,
  StyledButton,
  StyledButton1,
  StyledLinkedinImg,
  StyledText,
  TopHeading,
} from "./elements";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography, Container, Box } from "@mui/material";

import { MainLogo } from "@/assets";
import { useRouter } from "next/router";
import { SubFont } from "../../utils";

interface props {
  image: any;
  title: string;
  experiance: string;
  locationText: string;
}
export const CardSquare = ({
  image,
  title,
  experiance,
  locationText,
}: props) => {
  const router = useRouter();
  return (
    <Singlecard>
      <div style={{ padding: "20px" }}>
        <CardSection>
          <CardTitle>{title}</CardTitle>
        </CardSection>
        <CardSection style={{ marginBottom: "30px" }}>
          <StyledText>Experiance: {experiance}</StyledText>
        </CardSection>
        <CardSection style={{ marginBottom: "30px" }}>
          <LocationOnIcon />
          <StyledText>{locationText}</StyledText>
        </CardSection>
      </div>
      <SectionButton>
        <StyledButton1 onClick={() => router.push("/jobs/id")}>
          APPLY NOW
        </StyledButton1>
      </SectionButton>
    </Singlecard>
  );
};

export const OpenJobsSection = () => {
  const cardContent = [
    {
      image: MainLogo,
      title: "Laravel Developer",
      experiance: "3 To 5 Years",
      locationText: "Work From Office",
    },

    {
      image: MainLogo,
      title: "Business Development Executive",
      experiance: "1 To 4 Years",
      locationText: "Work From Office",
    },

    {
      image: MainLogo,
      title: ".Net core and Angular",
      experiance: " 2+ Years",
      locationText: "Work From Office",
    },

    {
      image: MainLogo,
      title: "UI/UX Designer",
      experiance: " 2+ Years",
      locationText: "Work From Office",
    },

    {
      image: MainLogo,
      title: "Embedded Software Engineer",
      experiance: "1 To 4 Years",
      locationText: "Work From Office",
    },

    {
      image: MainLogo,
      title: "Talent Acquisition Lead",
      experiance: "1 To 4 Years",

      locationText: "Work From Office",
    },

    {
      image: MainLogo,
      title: "Ruby on Rails",
      experiance: "1 To 4 Years",

      locationText: "Work From Office",
    },

    {
      image: MainLogo,
      title: "Devops",
      experiance: "1 To 4 Years",

      locationText: "Work From Office",
    },

    {
      image: MainLogo,
      title: "Salesforce",
      experiance: "1 To 4 Years",

      locationText: "Work From Office",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#F3F9FB" }}>
      <Container>
        <TopHeading>
          <Typography
            sx={{
              fontSize: SubFont,
            }}
          >
            Follow Us On
          </Typography>
          <StyledLinkedinImg src={JobsLinkedin} alt="Image" />
          <Typography
            sx={{
              fontSize: SubFont,
            }}
          >
            For The Latest Job Opportunities
          </Typography>
        </TopHeading>

        <CardContainer>
          <CardBox>
            {cardContent.map((i, index) => (
              <CardSquare
                key={index}
                title={i.title}
                experiance={i.experiance}
                locationText={i.locationText}
              />
            ))}
          </CardBox>
        </CardContainer>
      </Container>
    </Box>
  );
};
