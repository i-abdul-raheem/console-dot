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
import { Container, Box } from "@mui/material";
import { Layout } from "../../Layout/Layout";
import { Body } from "../../utils";
export const CareersTopPage = () => {
  const router = useRouter();
  return (
    <Box sx={{ backgroundColor: Body, color: "black" }}>
      <Container>
        <CareerContainer>
          <LeftCard
            sx={{
              width: {
                xl: "80%",
                lg: "80%",
                md: "80%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
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
          <ImageSection
            sx={{
              width: {
                xl: "20%",
                lg: "20%",
                md: "20%",
                sm: "0%",
                xs: "%",
              },
              display: {
                xl: "flex",
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <Image src={MainLogo} alt="Logo" width={250} />
          </ImageSection>
        </CareerContainer>
      </Container>
    </Box>
  );
};
