import Image from "next/image";
import { Fb, Insta, Linkedin } from "@/assets";
import {
  SectionContainer,
  SectionContent,
  SingleIconBox,
  SocialMediaLabel,
  TextSection,
} from "./elements";
import { Typography, Box, Container } from "@mui/material";
import { Body, HeadFont, Margin, Padding, Primary } from "../../utils";

export const FollowUsOn = () => {
  return (
    <Box sx={{ backgroundColor: Body, margin: Margin, padding: Padding }}>
      <Container>
        <SectionContent>
          <Box>
            <Typography
              sx={{
                margin: Margin,
                fontSize: HeadFont,
                color: Primary,
                textAlign: "center",
              }}
            >
              Follow Us On
            </Typography>
          </Box>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
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
          </div>
        </SectionContent>
      </Container>
    </Box>
  );
};
