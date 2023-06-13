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
import { Dark, Primary, SubFont } from "../../utils";
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
          APPLY NOW
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
        console.log(data, "debug jobs");
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F3F9FB" }}>
      <Container>
        <TopHeading>
          <Typography
            sx={{
              fontSize: SubFont,
              marginRight: "5px",
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
            {data?.map((i: any, index: string) => (
              <CardSquare
                key={index}
                title={i.title}
                experiance={i.experiance}
                locationText={i.locationText}
                id={i._id}
              />
            ))}
          </CardBox>
        </CardContainer>
      </Container>
    </Box>
  );
};
