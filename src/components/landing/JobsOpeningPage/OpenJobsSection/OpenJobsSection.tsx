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
import { useRouter } from "next/router";
import { Body, ContainerPadding, Dark, Primary, SubFont } from "../../utils";
import { getCareers } from "@/apis/careers";
import { useState, useEffect } from "react";

interface props {
  title: string;
  experiance: string;
  locationText: string;
  id: string;
}
export const CardSquare = ({ id, title, experiance, locationText }: props) => {
  const router = useRouter();
  return (
    <Singlecard>
      <div style={{ padding: "32px" }}>
        <CardSection>
          <CardTitle>{title}</CardTitle>
        </CardSection>
        <CardSection style={{ marginBottom: "30px" }}>
          <StyledText center>Experiance: {experiance}</StyledText>
        </CardSection>
        <CardSection style={{ marginBottom: "30px" }}>
          <StyledText fontSize={'16px'}>{locationText.slice(0, 100)}...</StyledText>
        </CardSection>
      </div>
      <SectionButton>
        <StyledButton1
          onClick={() => router.push(`/jobs/${id}`)}
          sx={{
            marginTop: "10px",
            color: "white",
            backgroundColor: Primary,
            "&:hover": {
              backgroundColor: Dark,
            },
          }}
        >
          View Job
        </StyledButton1>
      </SectionButton>
    </Singlecard>
  );
};

export const OpenJobsSection = () => {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCareers();
        setData([...res]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <Box sx={{ backgroundColor: Body }}>
      <Container sx={{ padding: ContainerPadding }}>
        <TopHeading mb={2}>
          <Typography
            sx={{
              fontSize: SubFont,
              marginRight: "8px",
            }}
          >
            Follow Us On
          </Typography>
          <StyledLinkedinImg src={JobsLinkedin} alt="Image" />
          <Typography
            sx={{
              fontSize: SubFont,
              marginLeft: "8px",
            }}
          >
            For The Latest Job Opportunities
          </Typography>
        </TopHeading>

        <CardContainer>
          <CardBox>
            {data?.map((i: any, index: string) => (
              <CardSquare
                key={index}
                title={i.title}
                experiance={i.experience}
                locationText={i.summary}
                id={i._id}
              />
            ))}
          </CardBox>
        </CardContainer>
      </Container>
    </Box>
  );
};
