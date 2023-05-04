import Image from "next/image";
import {
  ComponentContainer,
  DescriptionSection,
  FlexCard,
  FlexContainer,
  TitleSection,
} from "./elements";
import { Workwithus1, Workwithus2, Workwithus3, Workwithus4 } from "@/assets";
export const WorkWithUs = () => {
  return (
    <>
      <ComponentContainer>
        <TitleSection>Work With Us, Grow With Us</TitleSection>
        <DescriptionSection>
          We are a mixed group of like-minded professionals who firmly believe
          in leading rather than following. ConsoleDot is a place where young
          aspirants enter and emerge out as enthusiastic leaders. We have formed
          a workplace where things get done right, and accomplishments get
          privileged accolades.
        </DescriptionSection>
        <DescriptionSection style={{ marginBottom: "50px" }}>
          ConsoleDot is thriving on strong systems and being an exemplary
          organization, and we are striving for new development opportunities to
          add weight to your resume.
        </DescriptionSection>
        <FlexContainer>
          <FlexCard>
            <Image
              src={Workwithus1}
              alt="Image"
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src={Workwithus2}
              alt="Image"
              style={{ width: "100%", height: "auto" }}
            />
          </FlexCard>
          <FlexCard>
            <Image
              src={Workwithus3}
              alt="Image"
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src={Workwithus2}
              alt="Image"
              style={{ width: "100%", height: "auto" }}
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
      </ComponentContainer>
    </>
  );
};
