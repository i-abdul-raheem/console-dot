import Image from "next/image";
import { Fb, Insta, Linkedin } from "@/assets";
import {
  IconsList,
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
           <IconsList>
          <SingleIconBox>
            <Image src={Fb} alt="Fb Icon" style={{maxWidth:"60px", height:"60px"}} />
            <SocialMediaLabel>Facebook</SocialMediaLabel>
          </SingleIconBox>

          <SingleIconBox>
            <Image src={Insta} alt="Fb Icon" style={{maxWidth:"60px", height:"60px"}} />
            <SocialMediaLabel>Instagram</SocialMediaLabel>
          </SingleIconBox>

          <SingleIconBox>
            <Image src={Linkedin} alt="Fb Icon" style={{maxWidth:"60px", height:"60px"}} />
            <SocialMediaLabel>LinkedIn</SocialMediaLabel>
          </SingleIconBox>
          </IconsList>
        </SectionContent>
      </SectionContainer>
    </>
  );
};
