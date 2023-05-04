import Image from "next/image";
import {
  CardSection,
  ComponentContainer,
  DescriptionSection,
  FlexContiner,
  SectionButton,
  Singlecard,
  StyledButton,
  StyledText,
  TitleSection,
} from "./elements";
import { JobOpening } from "@/assets";
import { TitleAndDescripContiner } from "./elements";

interface Props {
  image: any;
  heading: String;
  details: String;
}

export const CardBox = ({ image, heading, details }: Props) => {
  return (
    <Singlecard>
      <div style={{padding: "20px"}}>
        <CardSection>
          <Image
            src={image}
            alt="Job Openoing Badge"
            width={100}
            height={100}
          />
        </CardSection>
        <CardSection>
          <h3>{heading}</h3>
        </CardSection>
        <CardSection style={{ marginBottom: "50px" }}>
          <StyledText>{details}</StyledText>
        </CardSection>
      </div>
      <SectionButton>
        <StyledButton>EXPOLRE MORE</StyledButton>
      </SectionButton>
    </Singlecard>
  );
};

export const WorkingAtConsoleDot = () => {
  const cards = [
    {
      image: JobOpening,
      heading: "Job Openings",
      details: `Find your dream job at the right place where you fit. There
                  are only two who believe in your dreams- we and you. We help
                  you transcend in your professional world, and you help us
                  achieve mutual goals`,
    },
    {
      image: JobOpening,
      heading: "Perks & Benefits",
      details: `When you work with ConsoleDot, it’s not only the salary that you get; you get a pool of benefits that grow you as an individual. Avail the leisure of 5-star at the comfort zone of your home and enjoy a dream workstation.`,
    },
    {
      image: JobOpening,
      heading: "Training & Development",
      details: `We believe in the constant upliftment of one’s skills. Learning is a life-long process, and we ensure that your growth isn’t stuck while you’re busy building your caree`,
    },
    {
      image: JobOpening,
      heading: "Interview Process",
      details: `ConsoleDot follows an uncluttered and unclouded interview process where a candidate never feels despondent. You get instant feedback after your interview, and we keep transparency in updating your selection.`,
    },
    {
      image: JobOpening,
      heading: "Our Culture",
      details: `Our unique work culture is a manifestation of the reviving souls of ConsoleDot. It is an environment built for you, by you. Dive in a workplace where you earn a professionally-rich environment and a culture that imbibes you.

      `,
    },
    {
      image: JobOpening,
      heading: "Meet Our Team",
      details: `As seven colors merge into the salient white, so do our heterogeneous mates affiliate in a union of like-mindedness. ConsoleDot is a collective force built by individual power-houses that contribute their acumen towards the greater good.`,
    },
  ];
  return (
    <>
      <ComponentContainer>
        <TitleAndDescripContiner>
          <TitleSection>Working @ ConsoleDot</TitleSection>
          <DescriptionSection>
            <StyledText>
              Here is what ConsoleDot’s job looks like. Take a dive into the
              setup and realize what have you been missing until now in your
              career.
            </StyledText>
          </DescriptionSection>
        </TitleAndDescripContiner>
        <FlexContiner>
          {cards.map((i, index) => (
            <CardBox
              key={index}
              image={i.image}
              heading={i.heading}
              details={i.details}
            />
          ))}
        </FlexContiner>
      </ComponentContainer>
    </>
  );
};
