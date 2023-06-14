import BusinessIcon from "@mui/icons-material/Business";
import { Container, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Typography } from "@mui/material/";
import {
  AddressInfo,
  ContactInfo,
  ContactSection,
  EmailInfo,
  FooterBottom,
  FooterHeading,
  FooterSection,
  NavItem,
  NavItemList,
  NavSection,
  ReviewSection,
  WhatsAppInfo,
  SocialMediaIconsList,
  FooterBottomCopyRight,
} from "./elements";
import { ContainerPadding, Dark, Padding } from "../utils";

export const Footer = () => {
  return (
    <>
      <FooterSection>
        <Container
          sx={{
            zIndex: "1",
            padding: ContainerPadding,
            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            rowGap: "32px",
            columnGap: "32px",
          }}
        >
          <ReviewSection>
            <FooterHeading mb={5}>About ConsoleDot Review</FooterHeading>
            <Typography sx={{ display: "flex" }}>
              We strive to get to the heart of what CPA candidates really need
              to know to sit for the exam with confidence - and earn their CPA
            </Typography>
          </ReviewSection>
          <NavSection sx={{}}>
            <FooterHeading>Navigation</FooterHeading>
            <NavItemList>
              <NavItem sx={{ padding: "7px" }}>About</NavItem>
              <NavItem sx={{ padding: "7px" }}>Contact us</NavItem>
              <NavItem sx={{ padding: "7px" }}>AdaptaPass</NavItem>
              <NavItem sx={{ padding: "7px" }}>Our Partners</NavItem>
              <NavItem sx={{ padding: "7px" }}>Privacy Policycy</NavItem>
              <NavItem sx={{ padding: "7px" }}>Reviews</NavItem>
            </NavItemList>
          </NavSection>
          <ContactSection>
            <FooterHeading>Get In Touch</FooterHeading>
            <ContactInfo>
              <AddressInfo
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  padding: "7px",
                  gap: "1rem",
                }}
              >
                <BusinessIcon />
                <span>
             
                  Ahmed Arcade, Suite 9, 1st Floor, Ferozpur Rd, Muslim Town Mor
                  Flyover, Lahore, 54600{" "}
                </span>
              </AddressInfo>
              <WhatsAppInfo
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  padding: "7px",
                  gap: "1rem",
                }}
              >
                <WhatsAppIcon />
                <span>555-5555-555</span>
              </WhatsAppInfo>

              <EmailInfo
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  padding: "7px",
                  gap: "1rem",
                }}
              >
                <EmailIcon />
                <span>ConsoleDot@gmail.com</span>
              </EmailInfo>
            </ContactInfo>
          </ContactSection>
        </Container>
      </FooterSection>
      <Box
        sx={{
          backgroundColor: "#113f67",
          color: "white",
          borderTop: "1px solid black",
        }}
      >
        <Container>
          <FooterBottom>
            <Box sx={{ width: "50%" }}>
              <FooterBottomCopyRight>
                Copyright © 2023 Yaeger CPA Review
              </FooterBottomCopyRight>
            </Box>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <SocialMediaIconsList>
                <FacebookIcon />
              </SocialMediaIconsList>
              <SocialMediaIconsList>
                <WhatsAppIcon />
              </SocialMediaIconsList>
              <SocialMediaIconsList>
                <EmailIcon />
              </SocialMediaIconsList>
              <SocialMediaIconsList>
                <LinkedInIcon />
              </SocialMediaIconsList>
              <SocialMediaIconsList>
                <TwitterIcon />
              </SocialMediaIconsList>
              <SocialMediaIconsList>
                <YouTubeIcon />
              </SocialMediaIconsList>
              <SocialMediaIconsList>
                <InstagramIcon />
              </SocialMediaIconsList>
            </div>
          </FooterBottom>
        </Container>
      </Box>
    </>
  );
};
