import Image from "next/image";
import { Fb, Insta, Linkedin } from "@/assets";
import {
  SectionContainer,
  SectionContent,
  SingleIconBox,
  SocialMediaLabel,
  TextSection,
} from "./elements";
import { Typography, Box } from "@mui/material";
import { HeadFont, Margin } from "../../utils";

export const FollowUsOn = () => {
  return (
    <>
      <SectionContainer>
        <SectionContent>
          <Box>
            <Typography
              sx={{
                margin: Margin,
                fontSize: HeadFont,
                color: "#226597",
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
      </SectionContainer>
    </>
  );
};
