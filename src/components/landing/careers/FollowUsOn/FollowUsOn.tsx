import Image from "next/image";
import { Fb, Insta, Linkedin } from "@/assets";
import {
  SectionContainer,
  SectionContent,
  SingleIconBox,
  SocialMediaLabel,
  TextSection,
} from "./elements";

export const FollowUsOn = () => {
  return (
    <>
      <SectionContainer>
        <SectionContent>
          <TextSection>
            <h2>Follow Us on</h2>
          </TextSection>

          <SingleIconBox>
            <Image src={Fb} alt="Fb Icon" width={60} height={60} />
            <SocialMediaLabel>Facebook</SocialMediaLabel>
          </SingleIconBox>

          <SingleIconBox>
            <Image src={Insta} alt="Fb Icon" width={60} height={60} />
            <SocialMediaLabel>Instagram</SocialMediaLabel>
          </SingleIconBox>

          <SingleIconBox>
            <Image src={Linkedin} alt="Fb Icon" width={60} height={60} />
            <SocialMediaLabel>LinkedIn</SocialMediaLabel>
          </SingleIconBox>
        </SectionContent>
      </SectionContainer>
    </>
  );
};
