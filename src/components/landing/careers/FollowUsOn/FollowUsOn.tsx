import Image from "next/image";
import { Fb, Insta, Linkedin } from "@/assets";
import {
  SectionContainer,
  SectionContent,
  SingleIconBox,
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
            <label>Facebook</label>
          </SingleIconBox>

          <SingleIconBox>
            <Image src={Insta} alt="Fb Icon" width={60} height={60} />
            <label>Instagram</label>
          </SingleIconBox>

          <SingleIconBox>
            <Image src={Linkedin} alt="Fb Icon" width={60} height={60} />
            <label>LinkedIn</label>
          </SingleIconBox>
        </SectionContent>
      </SectionContainer>
    </>
  );
};
