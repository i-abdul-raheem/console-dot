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
  StyledText,
  TopHeading,
} from "./elements";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MainLogo } from "@/assets";
import { useRouter } from "next/router";

interface props {
  image: any;
  title: string;
  experiance: string;
  locationText: string;
}
export const CardSquare = ({ image, title, experiance, locationText }: props) => {
  const router = useRouter();
  return (
    <Singlecard>
      <div style={{ padding: "20px" }}>
        <CardSection
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Image src={image} alt="Job Openoing Badge" width={40} height={40} />
        </CardSection>
        <CardSection>
          <CardTitle>{title}</CardTitle>
        </CardSection>
        <CardSection style={{ marginBottom: "50px" }}>
          <StyledText>Experiance: {experiance}</StyledText>
        </CardSection>
        <CardSection style={{ marginBottom: "50px" }}>
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
    <>
      <TopHeading>
        <h1 style={{ fontSize: "25px" }}>Follow Us On</h1>
        <Image src={JobsLinkedin} alt="Image" width={210} height={111} />
        <h1 style={{ fontSize: "25px" ,alignItems:"center",justifyContent:"center"}}>For The Latest Job Opportunities</h1>
      </TopHeading>
      <CardContainer>
        <CardBox>
          {cardContent.map((i, index) => (
            <CardSquare
              key={index}
              image={i.image}
              title={i.title}
              experiance={i.experiance}
              locationText={i.locationText}
            />
          ))}
        </CardBox>
      </CardContainer>
    </>
  );
};
