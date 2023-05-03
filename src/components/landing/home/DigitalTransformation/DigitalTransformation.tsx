import { CardSection } from "../CccSection/elements";
import {
  BoxesContainer,
  Container,
  DigiContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
  SquareBox,
} from "./elements";
import { TransformImage } from "@/assets";
export const DigitalTransformation = () => {
  return (
    <>
      <DigiContainer>
        <SectionTitleDescrip>
          <SectionTitle>Digital Transformations</SectionTitle>
          <SectionDescrip>
            Let us help you kick-start your digital transformation journey with
            human-centric digital experiences
          </SectionDescrip>
        </SectionTitleDescrip>
        <Container>
          <BoxesContainer>
            <SquareBox></SquareBox>
            <SquareBox></SquareBox>
            <SquareBox></SquareBox>
            <SquareBox></SquareBox>
          </BoxesContainer>
        </Container>
        <CardSection></CardSection>
      </DigiContainer>
    </>
  );
};
