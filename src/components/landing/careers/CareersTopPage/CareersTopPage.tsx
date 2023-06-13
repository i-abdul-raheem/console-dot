import Image from "next/image";
import { useRouter } from "next/router";
import { MainLogo } from "@/assets";

import {
  CareerContainer,
  ImageSection,
  LeftCard,
  StyledButton,
} from "./elements";

import { Container, Box, Typography } from "@mui/material";
import { Body, HeadFont, Margin, Padding, Primary, SubFont } from "../../utils";
export const CareersTopPage = () => {
  const router = useRouter();

  return (
    <Box sx={{ color: "black" }}>
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
            <Typography
              sx={{
                fontSize: HeadFont,

                color: Primary,
                padding: Padding,
              }}
            >
              Plunge into your Vocational Excellence with ConsoleDot and bag
              Skills for a Lifetime
            </Typography>
            <Typography
              sx={{
                fontSize: SubFont,
                margin: Margin,
              }}
            >
              ConsoleDot lives through its people’s emotions & we never miss a
              beat of Life. Cater to the fortune 500 clients and radiate your
              tech-spark worldwide.
            </Typography>
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
