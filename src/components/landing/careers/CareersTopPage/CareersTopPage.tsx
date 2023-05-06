import Image from "next/image";

import { MainLogo } from "@/assets";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  CareerContainer,
  ImageSection,
  LeftCard,
  LeftCardHeading,
  LeftCardParagraph,
  StyledButton,
} from "./elements";
import { useRouter } from "next/router";
export const CareersTopPage = () => {
  const router = useRouter();
  return (
    <>
      <CareerContainer>
        <LeftCard>
          <LeftCardHeading>
            Plunge into your Vocational Excellence with ConsoleDot and bag
            Skills for a Lifetime
          </LeftCardHeading>
          <LeftCardParagraph>
            ConsoleDot lives through its people’s emotions & we never miss a
            beat of Life. Cater to the fortune 500 clients and radiate your
            tech-spark worldwide.
          </LeftCardParagraph>
          <StyledButton onClick={() => router.push("/jobs")}>
            SEE OPENING
          </StyledButton>
        </LeftCard>
        <ImageSection>
          <Image src={MainLogo} alt="Logo" width={230} height={230} />
        </ImageSection>
      </CareerContainer>
    </>
  );
};
