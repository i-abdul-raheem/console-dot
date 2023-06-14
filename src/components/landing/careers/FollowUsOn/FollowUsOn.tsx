import Image from "next/image";
import { Fb, Insta, Linkedin } from "@/assets";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  SectionContainer,
  SectionContent,
  SingleIconBox,
  SocialMediaLabel,
  TextSection,
} from "./elements";
import { Typography, Box, Container } from "@mui/material";
import {
  Body,
  ContainerPadding,
  Dark,
  HeadFont,
  Margin,
  Padding,
  Primary,
} from "../../utils";

export const FollowUsOn = () => {
  return (
    <Box sx={{ padding: ContainerPadding }}>
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
              <FacebookIcon sx={{ width: 60, height: 60, color: Dark }} />
              <SocialMediaLabel>Facebook</SocialMediaLabel>
            </SingleIconBox>

            <SingleIconBox>
              <InstagramIcon sx={{ width: 60, height: 60, color: Dark }} />
              <SocialMediaLabel>Instagram</SocialMediaLabel>
            </SingleIconBox>

            <SingleIconBox>
              <LinkedInIcon sx={{ width: 60, height: 60, color: Dark }} />

              <SocialMediaLabel>LinkedIn</SocialMediaLabel>
            </SingleIconBox>
          </div>
        </SectionContent>
      </Container>
    </Box>
  );
};
